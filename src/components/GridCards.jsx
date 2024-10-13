// Components
import { DataCard } from "./DataCard"
import { PageHero } from "./PageHero"

export const GridCards = ( page ) => {
    const { products, category } = page;
    return (
        <>
            <PageHero/>
            <div className='container mx-auto flex flex-wrap flex-row gap-5 justify-center my-5'>
                { products.map( product => ( <DataCard { ...product } category={ category } key={ product.id }/> ) ) }
            </div>
        </>
    )
}