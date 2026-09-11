import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { DataCard } from '../components/DataCard';
import tools from '../resources/tools';
import { getFavorites } from '../hooks/useFavorites';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../utils/seo';

export const Favorites = () => {
  const favs = useMemo(() => getFavorites(), []);
  const items = useMemo(() => {
    const all = tools.flatMap((c) => (c.products || []).map((p) => ({ ...p, category: c.category })));
    return all.filter((p) => favs.has(p.url));
  }, [favs]);
  return (
    <>
      <Helmet>
        <title>Favoritos - WebTools</title>
        <meta name="description" content="Tus herramientas favoritas guardadas en WebTools." />
        <link rel="canonical" href={`${SITE_URL}/favoritos`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Favoritos - WebTools" />
        <meta property="og:url" content={`${SITE_URL}/favoritos`} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">&larr; Volver al inicio</Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Favoritos ({items.length})</h1>
        {items.length === 0 ? (
          <p className="mt-4 text-gray-500 dark:text-gray-400">Aún no guardaste favoritos. Tocá ☆ en cualquier herramienta.</p>
        ) : (
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            {items.map((p) => (<DataCard key={p.url} {...p} />))}
          </div>
        )}
      </div>
    </>
  );
};
