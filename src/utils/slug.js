export const slugify = (str = '') =>
  str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[´`'’‘]/g, '')
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getCategorySlug = (category = '') => slugify(category);

export const getCategoryBySlug = (tools = [], slug = '') =>
  tools.find((t) => slugify(t.category) === slugify(decodeURIComponent(slug || '')));
