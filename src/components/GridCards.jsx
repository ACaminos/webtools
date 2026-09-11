import { useCallback, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { DataCard } from "./DataCard"
import { PageHero } from "./PageHero"
import { Pagination } from "./Pagination"
import { SearchBar } from "./SearchBar"
import { slugify } from "../utils/slug"

const ITEMS_PER_PAGE = 12;

export const GridCards = (page) => {
    const { products, category } = page;
    const [params, setParams] = useSearchParams();
    const q = params.get('q') ?? '';
    const sort = params.get('sort') ?? 'az';
    const currentPage = Math.max(1, parseInt(params.get('page') || '1', 10) || 1);
    const setQuery = useCallback((patch) => {
        setParams((prev) => {
            const next = new URLSearchParams(prev);
            for (const [k, v] of Object.entries(patch)) {
                if (!v || v === '1' || (k === 'sort' && v === 'az')) next.delete(k);
                else next.set(k, v);
            }
            return next;
        }, { replace: true });
    }, [setParams]);

    const filtered = useMemo(() => {
        const n = slugify(q.trim());
        let list = n ? products.filter((p) => slugify(`${p.name} ${p.description}`).includes(n)) : [...products];
        list.sort((a, b) => sort === 'za' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
        return list;
    }, [products, q, sort]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const safePage = Math.min(currentPage, totalPages);
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    const currentProducts = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const handlePageChange = (p) => {
        setQuery({ page: String(p) });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <PageHero/>
            <div className="container mx-auto px-4 mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
                <SearchBar value={q} onChange={(v) => setQuery({ q: v, page: '1' })} placeholder={`Buscar en ${category}…`} />
                <label className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    Orden
                    <select aria-label="Ordenar herramientas" value={sort} onChange={(e) => setQuery({ sort: e.target.value, page: '1' })} className="text-sm rounded-lg border border-gray-300 bg-white px-2 py-2 dark:border-white/10 dark:bg-white/[0.04] dark:text-white">
                        <option value="az">A → Z</option>
                        <option value="za">Z → A</option>
                    </select>
                </label>
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4" aria-live="polite">{filtered.length === 0 ? 'Sin resultados' : `Mostrando ${filtered.length ? startIndex + 1 : 0}-${Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)} de ${filtered.length}`}</p>
            <div className='container mx-auto flex flex-wrap flex-row gap-6 justify-center my-10 px-4'>
                {currentProducts.map(product => (<DataCard {...product} category={category} key={`${category}-${product.id}`}/>))}
            </div>
            <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}
