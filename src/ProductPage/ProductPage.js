import React from 'react'
import Slider from "./Slider/Slider";
import ProdName from "./ProdName/ProdName";
import Desc from './Desc/Desc'
import "./ProductPage.scss"


const ProductPage = (props) => {
    console.log(props);
    return(
        <div className="products-wrapper">
            <Slider photos={props.props.slider}/>
            <ProdName prod={props.props}
            navHandl={props.navHandl}
            addToCart={props.addToCart}/>
            <Desc props={props.props} descHandler={props.descHandler} reviews={props.reviews}/>
        </div>

    )
}

export default ProductPage