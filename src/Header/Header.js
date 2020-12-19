import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Header.scss'
import {ReactComponent as BagLogo} from './shopping-bag.svg'


class Header extends Component{
    state = {
        burger: false,
    }

    burgerHandler(e){
        e.preventDefault()
        let newBurger = this.state.burger;

        this.setState({
            burger: !newBurger
        })
    }


    render(){


        return(
            <header>
                <a href="/" className="header" onClick={this.props.navHandl}>OCIN LITE</a>

                <nav>
                    <a href='burger' className={this.state.burger ? "burger-btn burger-active" : "burger-btn"}
                     onClick={this.burgerHandler.bind(this)}>
                    </a>
                    
                    <ul className={this.state.burger ? "nav-items-wrapper nav-active" : "nav-items-wrapper"}>
                        <li className="nav-item">SHOP</li>
                        <li className="nav-item">BLOG</li>
                        <li className="nav-item">PRODUCTS</li>
                    </ul>

                    <div className="cart-login-wrapper">
                        <div className="login-btn">LOGIN</div>
                        <Link to="/cart" className="cart-preview">
                            <span>{this.props.moneyCart}$</span>
                            <span>({this.props.countProductInCart})</span>
                            <BagLogo />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}


export default Header