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

function getMaxIds(tools) {
    let maxCategoryId = 0;
    let maxProductId = 0;
    for (const cat of tools) {
        if (cat.id > maxCategoryId) maxCategoryId = cat.id;
        for (const prod of cat.products) {
            if (prod.id > maxProductId) maxProductId = prod.id;
        }
    }
    return { maxCategoryId, maxProductId };
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

function findDuplicate(tools, name, url) {
    const normalizedName = name.trim().toLowerCase();
    const normalizedUrl = url.trim().toLowerCase();

    for (const cat of tools) {
        for (const prod of cat.products) {
            if (prod.url.trim().toLowerCase() === normalizedUrl) {
                return { type: 'URL', category: cat.category, name: prod.name, url: prod.url };
            }
            if (prod.name.trim().toLowerCase() === normalizedName) {
                return { type: 'nombre', category: cat.category, name: prod.name, url: prod.url };
            }
        }
    }
    return null;
}

function formatDate() {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

async function addTool() {
    const content = fs.readFileSync(TOOLS_PATH, 'utf-8');
    const tools = parseToolsFile(content);
    const { maxCategoryId, maxProductId } = getMaxIds(tools);

    console.log('\n📋 Categorías disponibles:\n');
    tools.forEach((cat, i) => {
        console.log(`  ${i + 1}. ${cat.category} (${cat.products.length} herramientas)`);
    });
    console.log(`  ${tools.length + 1}. Crear nueva categoría\n`);

    const catChoice = parseInt(await question('Selecciona categoría (número): '));

    let targetCategory;
    let isNewCategory = false;

    if (catChoice === tools.length + 1) {
        isNewCategory = true;
        const newCatName = await question('\nNombre de la nueva categoría: ');
        const newCatDesc = await question('Descripción de la categoría: ');
        const newCatIcon = await question('Icono Font Awesome (ej: fa-solid fa-star): ');

        targetCategory = {
            id: maxCategoryId + 1,
            category: newCatName,
            description: newCatDesc,
            products: [],
            icon: newCatIcon || 'fa-solid fa-folder',
            update: formatDate()
        };
    } else if (catChoice >= 1 && catChoice <= tools.length) {
        targetCategory = tools[catChoice - 1];
    } else {
        console.log('❌ Opción no válida');
        rl.close();
        return;
    }

    console.log('\n--- Datos del nuevo recurso ---\n');

    const name = await question('Nombre: ');
    const url = await question('URL: ');

    const duplicate = findDuplicate(tools, name, url);
    if (duplicate) {
        console.log('\n┌─────────────────────────────────────────┐');
        console.log('│  ⚠️  RECURSO DUPLICADO ENCONTRADO        │');
        console.log('├─────────────────────────────────────────┤');
        console.log(`│  Categoría: ${duplicate.category}`);
        console.log(`│  Nombre:    ${duplicate.name}`);
        console.log(`│  URL:       ${duplicate.url}`);
        console.log('├─────────────────────────────────────────┤');
        if (duplicate.type === 'URL') {
            console.log('│  🔗 Campo duplicado: URL');
            console.log('│  → Recomendación: Elige una URL diferente');
        } else {
            console.log('│  📝 Campo duplicado: Nombre');
            console.log('│  → Recomendación: Elige un nombre diferente');
        }
        console.log('└─────────────────────────────────────────┘');
        const retry = await question('\n¿Intentar con otros datos? (s/n): ');
        if (retry.toLowerCase() === 's') {
            return await addTool();
        }
        console.log('\n❌ Operación cancelada');
        rl.close();
        return;
    }

    const description = await question('Descripción: ');
    const previewInput = await question('URL de imagen preview (Enter para placeholder): ');
    const preview = previewInput.trim() || '/notImage.png';

    const newProduct = {
        id: maxProductId + 1,
        name,
        preview,
        url,
        description
    };

    console.log('\n┌─────────────────────────────────────────┐');
    console.log('│  📋 RESUMEN DEL RECURSO                 │');
    console.log('├─────────────────────────────────────────┤');
    console.log(`│  Categoría:  ${targetCategory.category}`);
    console.log(`│  Nombre:     ${name}`);
    console.log(`│  URL:        ${url}`);
    console.log(`│  Descripción: ${description}`);
    console.log(`│  Preview:    ${preview}`);
    console.log('└─────────────────────────────────────────┘');

    const confirm = await question('\n¿Confirmar? (s/n): ');

    if (confirm.toLowerCase() !== 's') {
        console.log('\n❌ Operación cancelada');
        rl.close();
        return;
    }

    if (isNewCategory) {
        const newCatCode = generateCategoryCode(targetCategory);
        const insertPoint = content.lastIndexOf(']');
        const newContent = content.slice(0, insertPoint) + newCatCode + '\n' + content.slice(insertPoint);
        fs.writeFileSync(TOOLS_PATH, newContent, 'utf-8');
        console.log('\n┌─────────────────────────────────────────┐');
        console.log('│  ✅ RECURSO CREADO EXITOSAMENTE         │');
        console.log('├─────────────────────────────────────────┤');
        console.log(`│  Categoría:  ${targetCategory.category}`);
        console.log(`│  Herramienta: ${name}`);
        console.log('└─────────────────────────────────────────┘');
    } else {
        targetCategory.products.push(newProduct);
        targetCategory.update = formatDate();

        const catIndex = tools.findIndex(c => c.id === targetCategory.id);
        const toolsWithoutTarget = tools.filter(c => c.id !== targetCategory.id);
        toolsWithoutTarget.splice(catIndex, 0, targetCategory);

        let newContent = 'const tools = [\n';
        newContent += toolsWithoutTarget.map(c => generateCategoryCode(c)).join('\n');
        newContent += ']\n\nexport default tools\n';

        fs.writeFileSync(TOOLS_PATH, newContent, 'utf-8');
        console.log('\n┌─────────────────────────────────────────┐');
        console.log('│  ✅ RECURSO AGREGADO EXITOSAMENTE       │');
        console.log('├─────────────────────────────────────────┤');
        console.log(`│  Categoría:  ${targetCategory.category}`);
        console.log(`│  Herramienta: ${name}`);
        console.log('└─────────────────────────────────────────┘');
    }

    const another = await question('\n¿Desea agregar otro recurso? (s/n): ');
    if (another.toLowerCase() === 's') {
        await addTool();
    } else {
        console.log('\n┌─────────────────────────────────────────┐');
        console.log('│  👋 ¡Hasta luego!                       │');
        console.log('└─────────────────────────────────────────┘');
        rl.close();
    }
}

console.log('┌─────────────────────────────────────────┐');
console.log('│  🔧 WebTools - Agregar nuevo recurso     │');
console.log('└─────────────────────────────────────────┘');
addTool().catch(err => {
    console.error('Error:', err.message);
    rl.close();
});
