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

async function editTool() {
    const content = fs.readFileSync(TOOLS_PATH, 'utf-8');
    const tools = parseToolsFile(content);

    console.log('\n📋 Categorías disponibles:\n');
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

    console.log(`\n📦 Herramientas en "${targetCategory.category}":\n`);
    targetCategory.products.forEach((prod, i) => {
        console.log(`  ${i + 1}. ${prod.name}`);
        console.log(`     URL: ${prod.url}`);
    });

    const prodChoice = parseInt(await question('\nSelecciona herramienta a editar (número): '));

    if (prodChoice < 1 || prodChoice > targetCategory.products.length) {
        console.log('❌ Opción no válida');
        rl.close();
        return;
    }

    const product = targetCategory.products[prodChoice - 1];

    console.log(`\n--- Editando: ${product.name} ---`);
    console.log(`  (Enter para mantener valor actual)\n`);

    const name = await question(`Nombre [${product.name}]: `);
    const url = await question(`URL [${product.url}]: `);
    const description = await question(`Descripción [${product.description}]: `);
    const preview = await question(`Preview [${product.preview}]: `);

    const updated = {
        ...product,
        name: name.trim() || product.name,
        url: url.trim() || product.url,
        description: description.trim() || product.description,
        preview: preview.trim() || product.preview
    };

    console.log('\n--- Cambios ---\n');
    if (updated.name !== product.name) console.log(`  Nombre: ${product.name} → ${updated.name}`);
    if (updated.url !== product.url) console.log(`  URL: ${product.url} → ${updated.url}`);
    if (updated.description !== product.description) console.log(`  Descripción: ${product.description} → ${updated.description}`);
    if (updated.preview !== product.preview) console.log(`  Preview: ${product.preview} → ${updated.preview}`);

    const confirm = await question('\n¿Confirmar cambios? (s/n): ');

    if (confirm.toLowerCase() !== 's') {
        console.log('\n❌ Operación cancelada');
        rl.close();
        return;
    }

    targetCategory.products[prodChoice - 1] = updated;
    targetCategory.update = formatDate();
    writeToolsFile(tools);

    console.log(`\n✅ "${updated.name}" actualizada`);

    const another = await question('\n¿Desea editar otro recurso? (s/n): ');
    if (another.toLowerCase() === 's') {
        await editTool();
    } else {
        console.log('\n👋 ¡Listo!');
        rl.close();
    }
}

console.log('✏️  WebTools - Editar recurso\n');
editTool().catch(err => {
    console.error('Error:', err.message);
    rl.close();
});
