import { Helmet } from 'react-helmet-async'
import { Navigate, useParams } from "react-router-dom"
import { Error404 } from "./Error404";
import { GridCards } from "../components/GridCards";
import { Breadcrumb } from "../components/Breadcrumb";
import { AdUnit } from "../components/AdUnit";
import tools from "../resources/tools";
import { getCategoryBySlug, getCategorySlug } from "../utils/slug";

export const Category = () => {
    const { category } = useParams();
    const page = getCategoryBySlug(tools, category);

    if (!page) return <Error404/>

    const canonicalSlug = getCategorySlug(page.category);
    if (category !== canonicalSlug) return <Navigate to={`/category/${canonicalSlug}`} replace />;

    const title = `${page.category} - WebTools | Herramientas para desarrolladores`
    const description = page.description || `Explora nuestra colección de herramientas de ${page.category} para desarrolladores frontend.`

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`https://webtools.vercel.app/category/${canonicalSlug}`} />
                <meta property="og:image" content="https://webtools.vercel.app/webtools.png" />
            </Helmet>
            <Breadcrumb />
            <GridCards {...page} />
            <AdUnit />
        </>
    )
}
