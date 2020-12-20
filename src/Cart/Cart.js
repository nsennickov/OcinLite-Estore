import React from "react";
import { Link } from "react-router-dom";
import './Cart.scss'

const Cart = props => {

console.log(props.cart);

    return(
        <div className="products-wrapper">
            <div className="cart-wrapper">
                <h1>Cart</h1>

                {props.cart.map(item => {
                    return(
                    <div className="item-in-cart">
                        <div className="remove-item">Remove</div>
                        <div className="item-name">
                            <span className="title">Product:</span>
                            <span>{item.name}</span>
                        </div>
                        <div className="item-price">
                            <span className="title">Price:</span>
                            <span>{item.price}$</span>
                        </div>
                        <div className="item-count">
                            <span className="title">Quantity:</span>
                            <div className="counter-wrap">
                                <span>+</span>
                                <span>{item.inCart}</span>
                                <span>-</span>
                            </div>
                            <span>{item.inCart}</span>
                        </div>
                        <div className="subtotal">
                            <span className="title">Subtotal:</span>
                            <span>{item.inCart * item.price}$</span>
                        </div>
                    </div>
                    )
                })}

                <div className="cart-total">
                    <h4>Total in the order: {}</h4>
                    <h4>For payment: {props.cart.map(elem => { let count = 0; return count = Number(elem.inCart * elem.price)})}</h4>
                    <Link to="/order">Make Order</Link>
                </div>
            </div>
        </div>
    )
    
}


export default Cart