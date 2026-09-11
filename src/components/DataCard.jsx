import PropTypes from 'prop-types'
import { useFavorites } from '../hooks/useFavorites'

export const DataCard = (product) => {
    const { name, description, url, preview } = product
    const { has, toggle } = useFavorites();
    const fav = has(url);
  return (
    <article className="group relative bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-md shadow-gray-200/50 transition-all duration-500 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/10 hover:-translate-y-1 max-w-xs w-full dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none dark:hover:border-brand-500/30 dark:hover:shadow-2xl dark:hover:shadow-brand-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100/50 via-transparent to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dark:from-brand-500/5 dark:via-transparent dark:to-purple-500/5" />

      <a href={url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
        <div className="relative">
          <button type="button" onClick={(e) => { e.preventDefault(); toggle(url); }} aria-pressed={fav} aria-label={fav ? `Quitar ${name} de favoritos` : `Guardar ${name} en favoritos`} title="Favorito" className="absolute top-2 right-2 z-20 w-9 h-9 rounded-full glass flex items-center justify-center text-brand-600 dark:text-brand-300 hover:scale-105 transition">
            <span aria-hidden="true">{fav ? '★' : '☆'}</span>
          </button>
          <img
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            src={preview}
            alt={name}
            width="320"
            height="192"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              if (!e.target.dataset.fallback) {
                e.target.dataset.fallback = 'true';
                e.target.src = '/notImage.png';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-surface/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </a>

      <div className="p-5 relative z-10">
        <a href={url} target="_blank" rel="noopener noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
          <h3 className="text-gray-900 font-bold text-lg tracking-tight mb-2 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300 transition-colors duration-300">{name}</h3>
        </a>
        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/5">
          <a
            href={url}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
          >
            Visitar sitio
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

DataCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  preview: PropTypes.string,
};
