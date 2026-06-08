import { Link } from "react-router-dom"

export const HorizontalCard = (tools) => {
  const { icon, category, description } = tools;

  return (
    <Link
      className="group relative rounded-2xl border border-gray-300 bg-white p-8 shadow-md shadow-gray-200/50 transition-all duration-500 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/10 hover:-translate-y-1 overflow-hidden dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-brand-500/30 dark:hover:bg-white/[0.06] dark:hover:shadow-2xl dark:hover:shadow-brand-500/10"
      to={`/category/${category}`}
      {...tools}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100/50 via-transparent to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-brand-500/5 dark:via-transparent dark:to-purple-500/5" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100 group-hover:text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 dark:group-hover:bg-brand-500/20 dark:group-hover:text-brand-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          <i className={`${icon} fa-xl`}></i>
        </div>
        <h2 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-200 transition-colors duration-300">{category}</h2>
        <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500/0 via-brand-400/60 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:via-brand-500/50" />
    </Link>
  )
}
