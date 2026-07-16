import { useState } from "react"
import { DataCard } from "./DataCard"
import { PageHero } from "./PageHero"
import { Pagination } from "./Pagination"

const ITEMS_PER_PAGE = 12;

export const GridCards = (page) => {
    const { products, category } = page;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <PageHero/>
            <div className='container mx-auto flex flex-wrap flex-row gap-6 justify-center my-10 px-4'>
                {currentProducts.map(product => (<DataCard {...product} category={category} key={product.id}/>))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </>
    )
}
