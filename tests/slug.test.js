import test from 'node:test';
import assert from 'node:assert/strict';
import { getCategoryBySlug, getCategorySlug, slugify } from '../src/utils/slug.js';

test('slugify kebab-case sin tildes', () => {
  assert.equal(slugify('Banco de Imagenes'), 'banco-de-imagenes');
  assert.equal(slugify('Deployment & Hosting'), 'deployment-hosting');
  assert.equal(slugify('Generadores de UI´s basados en AI'), 'generadores-de-uis-basados-en-ai');
  assert.equal(slugify('Divisores secciones web'), 'divisores-secciones-web');
});

test('lookup tolera legacy %20 y mayúsculas', () => {
  const tools = [{ category: 'Banco de Imagenes' }, { category: 'OpenSource' }];
  assert.equal(getCategoryBySlug(tools, 'banco-de-imagenes').category, 'Banco de Imagenes');
  assert.equal(getCategoryBySlug(tools, 'Banco%20de%20Imagenes').category, 'Banco de Imagenes');
  assert.equal(getCategoryBySlug(tools, 'OpenSource').category, 'OpenSource');
  assert.equal(getCategorySlug('Componentes UI'), 'componentes-ui');
});
