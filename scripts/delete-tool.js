import readline from 'readline';
import { fileURLToPath } from 'url';
import { formatDate, loadTools, parseIndex, writeToolsFile } from './tools-lib.js';
import { getToolsPath } from './tools-lib.js';

const __filename = fileURLToPath(import.meta.url);
const TOOLS_PATH = getToolsPath(__filename);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function deleteOnce() {
  const tools = await loadTools(TOOLS_PATH);
  console.log('\n📋 Categorías disponibles\n');
  tools.forEach((cat, i) => console.log(`  ${i + 1}. ${cat.category} (${cat.products.length} herramientas)`));
  const catChoice = parseIndex(await question('\nSelecciona categoría (número): '), tools.length);
  if (!catChoice) { console.log('❌ Opción no válida'); return; }
  const targetCategory = tools[catChoice - 1];
  targetCategory.products.forEach((prod, i) => console.log(`  ${i + 1}. ${prod.name}\n     URL: ${prod.url}`));
  const prodChoice = parseIndex(await question('\nSelecciona herramienta a eliminar (número): '), targetCategory.products.length);
  if (!prodChoice) { console.log('❌ Opción no válida'); return; }
  const product = targetCategory.products[prodChoice - 1];
  console.log(`\n⚠️ A ELIMINAR: ${product.name} | ${product.url} | ${targetCategory.category}`);
  const confirm = (await question('\n¿Confirmar eliminación? (s/n): ')).toLowerCase();
  if (confirm !== 's') { console.log('\n❌ Operación cancelada'); return; }
  targetCategory.products.splice(prodChoice - 1, 1);
  targetCategory.update = formatDate();
  writeToolsFile(TOOLS_PATH, tools);
  console.log('\n✅ RECURSO ELIMINADO EXITOSAMENTE');
}

console.log('┌─────────────────────────────────────────┐');
console.log('│  🗑️  WebTools - Eliminar recurso         │');
console.log('└─────────────────────────────────────────┘');
try {
  for (;;) {
    await deleteOnce();
    const another = (await question('\n¿Desea eliminar otro recurso? (s/n): ')).toLowerCase();
    if (another !== 's') break;
  }
} catch (err) {
  console.error('Error:', err.message);
} finally {
  rl.close();
}
