// React
import { useEffect, useState } from "react";

// React Router Dom
import { useParams } from "react-router-dom"

// Component
import { GridCards } from "../components/GridCards";

// Data
import tools from "../resources/tools";
import { Error404 } from "./Error404";

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
        { page ? ( <GridCards { ...page } /> ) :  <Error404/> }
    </>
  )
}
