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

    return (
        <>
            <Breadcrumb />
            <GridCards {...page} />
            <AdUnit />
        </>
    )
}
