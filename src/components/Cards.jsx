import tools from "../resources/tools"

export const Cards = () => {
  return (
    <section class="text-gray-600 body-font">

        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-100">Todas las categorias</h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
          </div>
          <div class="flex flex-wrap -m-2">
          { tools.map( ( tool ) => (
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                            <div class="flex-1 pl-1 mr-16">
                            <div class="font-medium">{ tool.category }</div>
                            <div class="text-gray-600 text-sm">{}</div>
                            </div>
                            <div class="text-gray-600 text-xs">Last Update : { tool.update }</div>
                        </div>
                    </li>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}