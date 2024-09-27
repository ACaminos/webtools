export const HorizontalCard = ( { category, description, url, icon } = tools ) => {
  return (
    <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-700/70 hover:shadow-blue-500/10" href={ url }>
      <i className={`${ icon } fa-xl`}></i>
      <h2 className="mt-4 text-xl font-bold text-white">{ category }</h2>
      <p className="mt-1 text-sm text-gray-300">{ description }</p>
    </a>
  )
}
