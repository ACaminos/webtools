import { Helmet } from 'react-helmet-async'
import { useParams } from "react-router-dom"
import { Error404 } from "./Error404";
import { GridCards } from "../components/GridCards";
import { Breadcrumb } from "../components/Breadcrumb";
import { AdUnit } from "../components/AdUnit";
import tools from "../resources/tools";

export const Category = () => {
    const { category } = useParams();
    const page = tools.find(p => p.category === category);

    if (!page) return <Error404/>

    const title = `${page.category} - WebTools | Herramientas para desarrolladores`
    const description = page.description || `Explora nuestra colección de herramientas de ${page.category} para desarrolladores frontend.`

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`https://webtools.vercel.app/category/${encodeURIComponent(page.category.toLowerCase())}`} />
                <meta property="og:image" content="https://webtools.vercel.app/webtools.png" />
            </Helmet>
            <Breadcrumb />
            <GridCards {...page} />
            <AdUnit />
        </>
    )
}
