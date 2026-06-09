// Components
import { HorizontalCard } from "./HorizontalCard"

// Resource
import tools from "../resources/tools"

export const Cards = () => {
  return (
    <section className="py-0" id="categories">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-14">
          <h2 className="text-gray-900 dark:text-white text-3xl font-bold sm:text-4xl">Todas las categorías</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Encuentra exactamente lo que necesitas para tu próximo proyecto</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (<HorizontalCard {...tool} key={tool.id} />))}
        </div>
      </div>
    </section>
  )
}
