import { Link, useParams } from 'react-router-dom'

export const Breadcrumb = () => {
    const { category } = useParams()
  return (
    <nav className="flex border-b border-gray-200 dark:border-white/5 py-3 px-5 bg-gray-50/50 dark:bg-surface/50" aria-label="Breadcrumb">
        <ol className="container mx-auto max-w-7xl inline-flex items-center space-x-2 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to={"/"} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white inline-flex items-center transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Inicio
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="text-gray-700 dark:text-gray-300 ml-2 text-sm font-medium capitalize">{category}</span>
              </div>
            </li>
        </ol>
    </nav>
  )
}
