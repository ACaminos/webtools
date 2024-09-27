import tools from "../resources/tools"
import { HorizontalCard } from "./HorizontalCard"

export const Cards = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-white text-3xl font-bold sm:text-4xl">Todas las categorias</h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            { tools.map( ( tools ) => ( <HorizontalCard {...tools} key={ tools.id } />) ) }
          </div>
        </div>
    </section>
  )
}