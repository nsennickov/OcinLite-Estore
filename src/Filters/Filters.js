import React from 'react'
import './Filters.scss'

const Filters = (props) => {

    return(
        <div className="filters-wrapper">
            <h1 className={props.title ? "page-title title-active" : "page-title"}>
                {props.title}
            </h1>
            <div className="filters">
                <ul className="filters-ul">
                    <li className="filter-item" onClick={props.filterHandler}>All</li>
                    <li className="filter-item" onClick={props.filterHandler}>Furniture</li>
                    <li className="filter-item" onClick={props.filterHandler}>Kitchen</li>
                    <li className="filter-item" onClick={props.filterHandler}>Lighting</li>
                    <li className="filter-item" onClick={props.filterHandler}>Tableware</li>
                </ul>
            </div>
        </div>
    )
}

export default Filters