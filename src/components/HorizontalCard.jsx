import { Link } from "react-router-dom"

export const HorizontalCard = ( tools ) => {
  const { icon, category, description } = tools;

  return (
    <Link className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-700/70 hover:shadow-blue-500/10" to={`/category/${ category }`} { ...tools }>
      <i className={`${ icon } fa-xl`}></i>
      <h2 className="mt-4 text-xl font-bold text-white">{ category }</h2>
      <p className="mt-1 text-sm text-gray-300">{ description }</p>
    </Link>
  )
}
