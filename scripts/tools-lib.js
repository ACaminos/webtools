import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

export const getToolsPath = (dirname) =>
  path.join(path.dirname(dirname), '..', 'src', 'resources', 'tools.js');

export async function loadTools(toolsPath) {
  const mod = await import(`${pathToFileURL(toolsPath).href}?t=${Date.now()}`);
  const tools = mod.default;
  if (!Array.isArray(tools)) throw new Error('tools.js no exporta un array');
  return tools;
}

export function isValidUrl(v) {
  if (!v) return false;
  try {
    const u = new URL(v.startsWith('/') ? `https://webtools.local${v}` : v);
    return v.startsWith('/') || ['http:', 'https:'].includes(u.protocol);
  } catch {
    return false;
  }
}

export function isValidPreview(v) {
  if (!v) return false;
  if (v.startsWith('/')) return true;
  return isValidUrl(v);
}

export function validateProduct(p) {
  const errors = [];
  if (!p.name?.trim()) errors.push('nombre vacío');
  if (!p.url?.trim() || !isValidUrl(p.url.trim())) errors.push('URL inválida (http/https o /local)');
  if (!p.description?.trim()) errors.push('descripción vacía');
  if (p.preview && !isValidPreview(p.preview.trim())) errors.push('preview inválida');
  return errors;
}

export function findDuplicate(tools, name, url, ignore = null) {
  const n = (name || '').trim().toLowerCase();
  const u = (url || '').trim().toLowerCase();
  for (const cat of tools) {
    for (const prod of cat.products || []) {
      if (ignore && ignore.categoryId === cat.id && ignore.productId === prod.id) continue;
      if ((prod.url || '').trim().toLowerCase() === u && u) {
        return { type: 'URL', category: cat.category, name: prod.name, url: prod.url };
      }
      if ((prod.name || '').trim().toLowerCase() === n && n) {
        return { type: 'nombre', category: cat.category, name: prod.name, url: prod.url };
      }
    }
  }
  return null;
}

const esc = (s = '') =>
  s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r');

const escSingle = (s = '') =>
  s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r');

export function generateToolCode(tool, indent = '            ') {
  return `${indent}{\n${indent}    id : ${tool.id},\n${indent}    name : "${esc(tool.name)}",\n${indent}    preview : "${esc(tool.preview)}",\n${indent}    url : "${esc(tool.url)}",\n${indent}    description : "${esc(tool.description)}",\n${indent}},`;
}

export function generateCategoryCode(cat, indent = '    ') {
  const productsCode = (cat.products || []).map((p) => generateToolCode(p, `${indent}        `)).join('\n');
  return `${indent}{\n${indent}    id : ${cat.id},\n${indent}    category : "${esc(cat.category)}",\n${indent}    description : '${escSingle(cat.description)}',\n${indent}    products : [\n${productsCode}\n${indent}    ],\n${indent}    icon : "${esc(cat.icon)}",\n${indent}    update : '${escSingle(cat.update)}',\n${indent}},`;
}

export function writeToolsFile(toolsPath, tools) {
  const backup = `${toolsPath}.bak`;
  try {
    if (fs.existsSync(toolsPath)) fs.copyFileSync(toolsPath, backup);
  } catch { void 0; }
  let newContent = 'const tools = [\n';
  newContent += tools.map((c) => generateCategoryCode(c)).join('\n');
  newContent += ']\n\nexport default tools\n';
  const tmp = `${toolsPath}.tmp`;
  fs.writeFileSync(tmp, newContent, 'utf-8');
  fs.renameSync(tmp, toolsPath);
}

export function formatDate() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

export function parseIndex(input, max) {
  const n = Number.parseInt(String(input).trim(), 10);
  if (!Number.isInteger(n) || n < 1 || n > max) return null;
  return n;
}
