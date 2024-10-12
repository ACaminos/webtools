import { DataCard } from "./DataCard"

export const GridCards = ( page ) => {
    const { products, category } = page
    return (
        <>
            <div class="w-full bg-center bg-cover h-[21rem]" style={{backgroundImage:'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)'}}>
                <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div class="text-center">
                        <h1 class="text-3xl font-semibold text-white lg:text-6xl"><span class="text-blue-400">{ category }</span></h1>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex flex-wrap flex-row gap-5 justify-center my-5'>
                { products.map( product => (
                    // <div className='columns-3'>
                       <DataCard { ...product } category={ category } key={ product.id }/>
                    // </div>
                    )
                )}
            </div>
        </>
    )
}