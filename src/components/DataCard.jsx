import { Link } from "react-router-dom"

export const DataCard = (product) => {
    const { name, description, url, preview } = product
  return (
    <div className="group relative bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-md shadow-gray-200/50 transition-all duration-500 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/10 hover:-translate-y-1 max-w-xs w-full dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none dark:hover:border-brand-500/30 dark:hover:shadow-2xl dark:hover:shadow-brand-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100/50 via-transparent to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dark:from-brand-500/5 dark:via-transparent dark:to-purple-500/5" />

      <Link to={url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            src={preview}
            alt={name}
            loading="lazy"
            onError={(e) => {
              e.target.src = '/notImage.png'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-surface/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-5 relative z-10">
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300 transition-colors duration-300">{name}</h5>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/5">
          <Link
            to={url}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors duration-200"
          >
            Visitar sitio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
