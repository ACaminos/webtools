import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOOLS_PATH = path.join(__dirname, '..', 'src', 'resources', 'tools.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (text) => new Promise((resolve) => rl.question(text, resolve));

function parseToolsFile(content) {
    const match = content.match(/const tools = (\[[\s\S]*\])/);
    if (!match) throw new Error('No se pudo parsear tools.js');
    return eval(match[1]);
}

function generateToolCode(tool, indent = '            ') {
    return `${indent}{
${indent}    id : ${tool.id},
${indent}    name : "${tool.name.replace(/"/g, '\\"')}",
${indent}    preview : "${tool.preview.replace(/"/g, '\\"')}",
${indent}    url : "${tool.url.replace(/"/g, '\\"')}",
${indent}    description : "${tool.description.replace(/"/g, '\\"')}",
${indent}},`;
}

function generateCategoryCode(cat, indent = '    ') {
    const productsCode = cat.products.map(p => generateToolCode(p, indent + '        ')).join('\n');
    return `${indent}{
${indent}    id : ${cat.id},
${indent}    category : "${cat.category.replace(/"/g, '\\"')}",
${indent}    description : '${cat.description.replace(/'/g, "\\'")}',
${indent}    products : [
${productsCode}
${indent}    ],
${indent}    icon : "${cat.icon}",
${indent}    update : '${cat.update}',
${indent}},`;
}

function formatDate() {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

function writeToolsFile(tools) {
    let newContent = 'const tools = [\n';
    newContent += tools.map(c => generateCategoryCode(c)).join('\n');
    newContent += ']\n\nexport default tools\n';
    fs.writeFileSync(TOOLS_PATH, newContent, 'utf-8');
}

async function deleteTool() {
    const content = fs.readFileSync(TOOLS_PATH, 'utf-8');
    const tools = parseToolsFile(content);

    console.log('\n┌─────────────────────────────────────────┐');
console.log('│  📋 Categorías disponibles              │');
console.log('└─────────────────────────────────────────┘\n');
    tools.forEach((cat, i) => {
        console.log(`  ${i + 1}. ${cat.category} (${cat.products.length} herramientas)`);
    });

    const catChoice = parseInt(await question('\nSelecciona categoría (número): '));

    if (catChoice < 1 || catChoice > tools.length) {
        console.log('❌ Opción no válida');
        rl.close();
        return;
    }

    const targetCategory = tools[catChoice - 1];

    console.log('\n┌─────────────────────────────────────────┐');
    console.log(`│  📦 Herramientas en "${targetCategory.category}"`);
    console.log('└─────────────────────────────────────────┘\n');
    targetCategory.products.forEach((prod, i) => {
        console.log(`  ${i + 1}. ${prod.name}`);
        console.log(`     URL: ${prod.url}`);
    });

    const prodChoice = parseInt(await question('\nSelecciona herramienta a eliminar (número): '));

    if (prodChoice < 1 || prodChoice > targetCategory.products.length) {
        console.log('❌ Opción no válida');
        rl.close();
        return;
    }

    const product = targetCategory.products[prodChoice - 1];

    console.log('\n┌─────────────────────────────────────────┐');
    console.log('│  ⚠️  RECURSO A ELIMINAR                  │');
    console.log('├─────────────────────────────────────────┤');
    console.log(`│  Nombre:     ${product.name}`);
    console.log(`│  URL:        ${product.url}`);
    console.log(`│  Categoría:  ${targetCategory.category}`);
    console.log('└─────────────────────────────────────────┘');

    const confirm = await question('\n¿Confirmar eliminación? (s/n): ');

    if (confirm.toLowerCase() !== 's') {
        console.log('\n❌ Operación cancelada');
        rl.close();
        return;
    }

    targetCategory.products.splice(prodChoice - 1, 1);
    targetCategory.update = formatDate();
    writeToolsFile(tools);

    console.log('\n┌─────────────────────────────────────────┐');
    console.log('│  ✅ RECURSO ELIMINADO EXITOSAMENTE      │');
    console.log('└─────────────────────────────────────────┘');
    console.log(`   Herramienta: ${product.name}`);

    const another = await question('\n¿Desea eliminar otro recurso? (s/n): ');
    if (another.toLowerCase() === 's') {
        await deleteTool();
    } else {
        console.log('\n┌─────────────────────────────────────────┐');
        console.log('│  👋 ¡Hasta luego!                       │');
        console.log('└─────────────────────────────────────────┘');
        rl.close();
    }
}

console.log('┌─────────────────────────────────────────┐');
console.log('│  🗑️  WebTools - Eliminar recurso         │');
console.log('└─────────────────────────────────────────┘');
deleteTool().catch(err => {
    console.error('Error:', err.message);
    rl.close();
});
