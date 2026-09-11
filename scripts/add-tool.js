import readline from 'readline';
import { fileURLToPath } from 'url';
import { findDuplicate, formatDate, loadTools, parseIndex, validateProduct, writeToolsFile } from './tools-lib.js';
import { getToolsPath } from './tools-lib.js';

const __filename = fileURLToPath(import.meta.url);
const TOOLS_PATH = getToolsPath(__filename);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function addOnce() {
  const tools = await loadTools(TOOLS_PATH);
  const maxCategoryId = Math.max(0, ...tools.map((c) => c.id));
  const maxProductId = Math.max(0, ...tools.flatMap((c) => (c.products || []).map((p) => p.id)));

  console.log('\n📋 Categorías disponibles:\n');
  tools.forEach((cat, i) => console.log(`  ${i + 1}. ${cat.category} (${cat.products.length} herramientas)`));
  console.log(`  ${tools.length + 1}. Crear nueva categoría\n`);

  const catChoice = parseIndex(await question('Selecciona categoría (número): '), tools.length + 1);
  if (!catChoice) { console.log('❌ Opción no válida'); return true; }

  let targetCategory;
  let isNewCategory = false;
  if (catChoice === tools.length + 1) {
    isNewCategory = true;
    const newCatName = (await question('\nNombre de la nueva categoría: ')).trim();
    const newCatDesc = (await question('Descripción de la categoría: ')).trim();
    const newCatIcon = (await question('Icono Font Awesome (ej: fa-solid fa-star): ')).trim();
    if (!newCatName || !newCatDesc) { console.log('❌ Nombre y descripción obligatorios'); return true; }
    if (tools.some((c) => c.category.toLowerCase() === newCatName.toLowerCase())) {
      console.log('❌ Ya existe esa categoría'); return true;
    }
    targetCategory = { id: maxCategoryId + 1, category: newCatName, description: newCatDesc, products: [], icon: newCatIcon || 'fa-solid fa-folder', update: formatDate() };
  } else {
    targetCategory = tools[catChoice - 1];
  }

  console.log('\n--- Datos del nuevo recurso ---\n');
  const name = (await question('Nombre: ')).trim();
  const url = (await question('URL: ')).trim();
  const description = (await question('Descripción: ')).trim();
  const previewInput = (await question('URL de imagen preview (Enter para placeholder): ')).trim();
  const preview = previewInput || '/notImage.png';

  const errors = validateProduct({ name, url, description, preview });
  if (errors.length) { console.log(`\n❌ ${errors.join(', ')}`); return true; }

  const duplicate = findDuplicate(tools, name, url);
  if (duplicate) {
    console.log(`\n⚠️ DUPLICADO (${duplicate.type}) en ${duplicate.category}: ${duplicate.name} - ${duplicate.url}`);
    return true;
  }

  const newProduct = { id: maxProductId + 1, name, preview, url, description };
  console.log(`\n📋 ${targetCategory.category} | ${name} | ${url}`);
  const confirm = (await question('\n¿Confirmar? (s/n): ')).toLowerCase();
  if (confirm !== 's') { console.log('\n❌ Operación cancelada'); return true; }

  if (isNewCategory) {
    targetCategory.products.push(newProduct);
    tools.push(targetCategory);
  } else {
    const idx = tools.findIndex((c) => c.id === targetCategory.id);
    tools[idx].products.push(newProduct);
    tools[idx].update = formatDate();
  }
  writeToolsFile(TOOLS_PATH, tools);
  console.log('\n✅ RECURSO CREADO EXITOSAMENTE');
  return true;
}

console.log('┌─────────────────────────────────────────┐');
console.log('│  🔧 WebTools - Agregar nuevo recurso     │');
console.log('└─────────────────────────────────────────┘');
try {
  for (;;) {
    await addOnce();
    const another = (await question('\n¿Desea agregar otro recurso? (s/n): ')).toLowerCase();
    if (another !== 's') break;
  }
} catch (err) {
  console.error('Error:', err.message);
} finally {
  rl.close();
}
