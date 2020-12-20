import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Products.scss'
import {ReactComponent as Cart} from './cart.svg'


class Product extends Component{
    state = {
        img: this.props.img,
        isHover: false
    }

    hoverHandler = (e) => {
        this.setState({
            isHover: true,
        })
    } 

    leaveHandler = (e) => {
       this.setState({
            isHover: false,
        })
    }

    
    render() {
        const defaultImg = this.props.img;
        const hoverImg = this.props.hover;
        
        return(
            <div className="card"
            onMouseEnter={this.hoverHandler} 
            onMouseLeave={this.leaveHandler}
            >
                <Link to={`/products/${this.props.id}`} className="photo-wrapper" onClick={() => this.props.openPage(this.props.id)}>
                    <img src={this.state.isHover ? hoverImg : defaultImg} className="card-photo" alt="prod_photo"/>
                </Link>
                <div className="card-footer">
                    <h3 className="card-name">{this.props.name}</h3>
                    <h3 className="card-price">${this.props.price}</h3>
                    <div onClick={() => this.props.addToCart(this.props.id)} className={this.state.isHover ? "hover-cart card-hover" : "hover-cart"}><Cart /></div>
                </div>
            </div>
        )
    }

}

export default Product