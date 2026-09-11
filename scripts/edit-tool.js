import readline from 'readline';
import { fileURLToPath } from 'url';
import { findDuplicate, formatDate, loadTools, parseIndex, validateProduct, writeToolsFile } from './tools-lib.js';
import { getToolsPath } from './tools-lib.js';

const __filename = fileURLToPath(import.meta.url);
const TOOLS_PATH = getToolsPath(__filename);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function editOnce() {
  const tools = await loadTools(TOOLS_PATH);
  console.log('\n📋 Categorías disponibles\n');
  tools.forEach((cat, i) => console.log(`  ${i + 1}. ${cat.category} (${cat.products.length} herramientas)`));
  const catChoice = parseIndex(await question('\nSelecciona categoría (número): '), tools.length);
  if (!catChoice) { console.log('❌ Opción no válida'); return; }
  const targetCategory = tools[catChoice - 1];
  targetCategory.products.forEach((prod, i) => console.log(`  ${i + 1}. ${prod.name}\n     URL: ${prod.url}`));
  const prodChoice = parseIndex(await question('\nSelecciona herramienta a editar (número): '), targetCategory.products.length);
  if (!prodChoice) { console.log('❌ Opción no válida'); return; }
  const product = targetCategory.products[prodChoice - 1];
  console.log(`\n✏️ Editando: ${product.name} (Enter para mantener)\n`);
  const name = (await question(`Nombre [${product.name}]: `)).trim() || product.name;
  const url = (await question(`URL [${product.url}]: `)).trim() || product.url;
  const description = (await question(`Descripción [${product.description}]: `)).trim() || product.description;
  const preview = (await question(`Preview [${product.preview}]: `)).trim() || product.preview;

  const errors = validateProduct({ name, url, description, preview });
  if (errors.length) { console.log(`\n❌ ${errors.join(', ')}`); return; }
  const duplicate = findDuplicate(tools, name, url, { categoryId: targetCategory.id, productId: product.id });
  if (duplicate) { console.log(`\n⚠️ DUPLICADO (${duplicate.type}) en ${duplicate.category}: ${duplicate.name}`); return; }

  const updated = { ...product, name, url, description, preview };
  const confirm = (await question('\n¿Confirmar cambios? (s/n): ')).toLowerCase();
  if (confirm !== 's') { console.log('\n❌ Operación cancelada'); return; }
  targetCategory.products[prodChoice - 1] = updated;
  targetCategory.update = formatDate();
  writeToolsFile(TOOLS_PATH, tools);
  console.log('\n✅ RECURSO ACTUALIZADO EXITOSAMENTE');
}

console.log('┌─────────────────────────────────────────┐');
console.log('│  ✏️  WebTools - Editar recurso           │');
console.log('└─────────────────────────────────────────┘');
try {
  for (;;) {
    await editOnce();
    const another = (await question('\n¿Desea editar otro recurso? (s/n): ')).toLowerCase();
    if (another !== 's') break;
  }
} catch (err) {
  console.error('Error:', err.message);
} finally {
  rl.close();
}
