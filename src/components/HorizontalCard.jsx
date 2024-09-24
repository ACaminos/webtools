export const HorizontalCard = ( {category, update } ) => {
  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div class="flex-1 pl-1 mr-16">
                <div class="font-medium">{ category }</div>
                <div class="text-gray-600 text-sm">{}</div>
                </div>
                <div class="text-gray-600 text-xs">Last Update : { update }</div>
            </div>
        </li>
    </div>
  )
}