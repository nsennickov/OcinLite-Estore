import React from "react";
import './Pagination.scss'

const Pagination = (props) => {

    let buttons = [];

    for(let i = 1; i <= props.count; i++){
        buttons.push(<button className={i === props.active ? "pag-btn active" : "pag-btn"} onClick={props.nextPage} key={i}>{i}</button>)
    }

    return(
    <div className="pag-btn-wrapper">{buttons}</div>
    )
}

export default Pagination