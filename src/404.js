import React from "react";
import Wrapper from "./hoc/Wrapper";


const notFound = () => {
    return(
        <Wrapper>
            <h1>404</h1>
            <p>The page isn`t found</p>
        </Wrapper>
    )
}

export default notFound