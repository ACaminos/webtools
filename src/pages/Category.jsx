import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from "react-router-dom"
import { Error404 } from "./Error404";
import { GridCards } from "../components/GridCards";
import { Breadcrumb } from "../components/Breadcrumb";
import { AdUnit } from "../components/AdUnit";
import tools from "../resources/tools";
import { getCategoryBySlug, getCategorySlug } from "../utils/slug";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../utils/seo";
import { getGuide } from "../resources/editorial";

export const Category = () => {
    const { category } = useParams();
    const page = getCategoryBySlug(tools, category);

    if (!page) return <Error404/>

    const canonicalSlug = getCategorySlug(page.category);
    if (category !== canonicalSlug) return <Navigate to={`/category/${canonicalSlug}`} replace />;

    const title = `${page.category} - WebTools | Herramientas para desarrolladores`
    const description = page.description || `Explora nuestra colección de herramientas de ${page.category} para desarrolladores frontend.`
    const canonicalUrl = `${SITE_URL}/category/${canonicalSlug}`
    const guide = getGuide(canonicalSlug);
    const readingMins = guide
      ? Math.max(1, Math.round(`${guide.intro} ${guide.faqs.map((f) => `${f.q} ${f.a}`).join(' ')}`.split(/\s+/).length / 200))
      : 0;
    const faqSchema = guide ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    } : null;
    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: title,
      itemListElement: page.products.slice(0, 10).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: p.url,
      })),
    };

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={DEFAULT_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
                <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, description, url: canonicalUrl })}</script>
                <script type="application/ld+json">{JSON.stringify(itemList)}</script>
                {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
            </Helmet>
            <Breadcrumb />
            <GridCards {...page} />
            {guide && (
              <section aria-labelledby="guide-title" id="guia" className="container mx-auto px-4 my-10 scroll-mt-20">
                <div className="mx-auto w-full md:max-w-[calc(2*20rem+1.5rem)] xl:max-w-[calc(3*20rem+2*1.5rem)] 2xl:max-w-[calc(4*20rem+3*1.5rem)]">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <i aria-hidden="true" className={`${page.icon} fa-lg`}></i>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">Guía</p>
                    <h2 id="guide-title" className="text-2xl font-bold text-gray-900 dark:text-white">Guía de {page.category}</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{page.products.length} herramientas · Actualizado {page.update} · {readingMins} min de lectura</p>
                  </div>
                </div>

                <div className="relative mt-6 overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 shadow-md shadow-gray-200/50 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none md:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-100/50 via-transparent to-purple-100/50 pointer-events-none dark:from-brand-500/5 dark:via-transparent dark:to-purple-500/5" />
                  <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed">{guide.intro}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500/0 via-brand-400/60 to-brand-500/0 dark:via-brand-500/50" />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {guide.faqs.map((f, i) => (
                    <details key={f.q} className="group rounded-2xl border border-gray-300 bg-white px-5 py-4 shadow-md shadow-gray-200/50 transition-all duration-300 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-brand-500/30 dark:hover:shadow-2xl dark:hover:shadow-brand-500/10">
                      <summary className="flex cursor-pointer list-none items-center gap-3 font-semibold text-gray-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
                        <span aria-hidden="true" className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-brand-50 text-xs font-bold text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">{i + 1}</span>
                        <span className="flex-1">{f.q}</span>
                        <svg aria-hidden="true" className="h-4 w-4 flex-none text-gray-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-3 pl-10 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{f.a}</p>
                    </details>
                  ))}
                </div>
                <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 px-5 py-4 dark:border-brand-500/30 dark:bg-brand-500/5 sm:flex-row sm:items-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">¿Conoces otra herramienta de {page.category} que debería estar aquí?</p>
                  <Link to="/contacto" className="inline-flex flex-none items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-500 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                    Sugerir herramienta
                  </Link>
                </div>
                </div>
              </section>
            )}
            <AdUnit />
        </>
    )
}
