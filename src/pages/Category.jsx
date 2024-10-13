// React
import { useEffect, useState } from "react";

// React Router Dom
import { useParams } from "react-router-dom"

// Component
import { Error404 } from "./Error404";
import { GridCards } from "../components/GridCards";
import { Breadcrumb } from "../components/Breadcrumb";

// Data
import tools from "../resources/tools";

export const Category = () => {
    const { category } = useParams();
    const [ page, setPage ] = useState( null )

    useEffect(() => {
        const pages = tools.find( page => page.category === category );
        setPage ( pages )
        },[ category ]
    )

  return (
    <>
        <Breadcrumb category={ category }/>
        { page ? ( <GridCards { ...page } /> ) :  <Error404/> }
    </>
  )
}
