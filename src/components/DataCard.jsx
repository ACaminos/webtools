// React Router Dom
import { Link } from "react-router-dom"

export const DataCard = ( product ) => {
    const { name, description, url, preview } = product
  return (
        <>
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs dark:bg-gray-800 dark:border-gray-700">
                <Link to={ url } target="_blank">
                    <img class="rounded-t-lg" src={ preview } alt="" style={ { width:'318px', height:'200px', backgroundSize:'cover'}}/>
                </Link>
                <div class="p-5">
                    <Link to={ url }>
                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{ name }</h5>
                    </Link>
                    <p class="font-normal text-gray-700 dark:text-gray-400">{ description }</p>
                    {/* <Link to={ url } target="_blank" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        ir
                        <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link> */}
                </div>
            </div>
        </>
  )
}


