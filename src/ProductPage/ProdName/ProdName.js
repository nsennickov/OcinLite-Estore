import React from 'react'
import { Link } from 'react-router-dom'
import './ProdName.scss'

const ProdName = (props) => {

    const getNavHandler = (elem) => {
        return(
            <p className="name-nav">
                <Link to="/" className="span-home" > Home</Link> / 
                <Link to="/" onClick={(e) => props.navHandl(`${elem.filterProps}`)} className="span-style" >{elem.filterProps}</Link> / 
                <span>{elem.name}</span>
            </p>
        )
    }


    const getPriceHandler = (elem) => {
        return(
            <div className="price-wrap">
                <h1>{elem.name}</h1>
                <h3>${elem.price}</h3>
            </div>
        )
    }


    const getCountHandler = () => {

        let count = 1;

        return(
            <div className="count-wrap">
                <div className="input-wrapper">
                    <input type="number" max='10' placeholder="1" className="input-count" onChange={(e) => {count = Number(e.target.value)}}></input>
                    <div className="add-btn" onClick={() => props.addToCart(props.prod.id, count)}>Add to cart</div>
                </div>
                <div className="social-icons">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/733/733579.svg" alt="social-icons" ></img>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/733/733547.svg" alt="social-icons" ></img>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/733/733585.svg" alt="social-icons" ></img>
                </div>
            </div>
        )
    }

    return(
        <div className="name-wrapper">
            {getNavHandler(props.prod)}

            {getPriceHandler(props.prod)}

            {getCountHandler()}
        </div>
    )
}


export default ProdName