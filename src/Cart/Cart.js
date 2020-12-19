import React from "react";
import './Cart.scss'

const Cart = props => {

console.log(props.cart);

    return(
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
        </div>
    )
    
}


export default Cart