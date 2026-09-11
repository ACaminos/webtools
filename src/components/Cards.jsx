// Components
import { useCallback, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { HorizontalCard } from "./HorizontalCard"
import { SearchBar } from "./SearchBar"

// Resource
import categories from "../resources/categories"
import { slugify } from "../utils/slug"

export const Cards = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const setQ = useCallback((v) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (v) next.set('q', v); else next.delete('q');
      return next;
    }, { replace: true });
  }, [setParams]);
  const filtered = useMemo(() => {
    const n = slugify(q.trim());
    if (!n) return categories;
    return categories.filter((c) => slugify(`${c.category} ${c.description}`).includes(n));
  }, [q]);
  return (
    <section className="py-0" id="categories" aria-labelledby="categories-title">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h2 id="categories-title" className="text-gray-900 dark:text-white text-3xl font-bold sm:text-4xl">Todas las categorías</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Encuentra exactamente lo que necesitas para tu próximo proyecto</p>
          <div className="mt-6 flex justify-center">
            <SearchBar value={q} onChange={setQ} placeholder="Buscar categorías…" />
          </div>
          {q && <p className="mt-3 text-sm text-gray-500 dark:text-gray-400" aria-live="polite">{filtered.length} resultado(s) para “{q}”</p>}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (<HorizontalCard {...tool} key={tool.id} />))}
        </div>
        {filtered.length === 0 && <p className="text-center text-gray-500 dark:text-gray-400 mt-8">Sin resultados. Probá con otro término.</p>}
      </div>
    </section>
  )
}
