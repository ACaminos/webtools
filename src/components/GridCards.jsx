import { DataCard } from "./DataCard"

export const GridCards = ( page ) => {
    const { products, category, description } = page
    console.log('--aca--', products)
    return (
        <>
            <div className='container mx-auto flex flex-wrap flex-row gap-5'>
                { products.map( product => (
                    // <div className='columns-3'>
                       <DataCard { ...product }/>
                    // </div>
                    )
                )}
            </div>
        </>
    )
}