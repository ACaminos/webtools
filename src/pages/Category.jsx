import { Helmet } from 'react-helmet-async'
import { Navigate, useParams } from "react-router-dom"
import { Error404 } from "./Error404";
import { GridCards } from "../components/GridCards";
import { Breadcrumb } from "../components/Breadcrumb";
import { AdUnit } from "../components/AdUnit";
import tools from "../resources/tools";
import { getCategoryBySlug, getCategorySlug } from "../utils/slug";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../utils/seo";

export const Category = () => {
    const { category } = useParams();
    const page = getCategoryBySlug(tools, category);

    if (!page) return <Error404/>

    const canonicalSlug = getCategorySlug(page.category);
    if (category !== canonicalSlug) return <Navigate to={`/category/${canonicalSlug}`} replace />;

    const title = `${page.category} - WebTools | Herramientas para desarrolladores`
    const description = page.description || `Explora nuestra colección de herramientas de ${page.category} para desarrolladores frontend.`
    const canonicalUrl = `${SITE_URL}/category/${canonicalSlug}`

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
            </Helmet>
            <Breadcrumb />
            <GridCards {...page} />
            <AdUnit />
        </>
    )
}
