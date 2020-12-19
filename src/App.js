import { React, Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './Header/Header';
import ProductPage from "./ProductPage/ProductPage";
import allProducts from './woocomerce/database'
import Footer from './Footer/Footer'
import Cart from './Cart/Cart'
import MainPage from "./MainPage";
import notFound from "./404";


class App extends Component {
	state = {
		title: '',
		products: [...allProducts],
		currProdPage: null,
		currProdPageID: null,
		pagination: [1, 14],
		reviews: false,
		moneyInCart: 0,
		cart: [],
		cartLength: 0,
	}
	
	// Open product page
	openProdPageHandler = (id) => {
		const currentProd = this.state.products.find(elem => {
			if(elem.id === id){
				return elem
			}
		})
		
		this.setState({
			currProdPage: currentProd,
			currProdPageID: currentProd.id,
		})
	}

	descriptionHandler = () => {
		this.setState({
			reviews: !this.state.reviews
		})
	}

	//Navigation in filters
	changeNavHandler = (name) => {
		if(name === 'span-home' || name === 'header'){
			window.location.reload()
		}else{
			this.filterHandler(undefined, name)
		}
	}

	//Pagitation
	paginationHandler = (e) => {
		const standartIndex = [1, 14];
		let page = e.target.innerHTML;

		for(let i = 1; i < page; i++){
			standartIndex[0] += 14;
			standartIndex[1] += 14
		}

		this.setState({
			pagination: standartIndex
		})
	}


	//Filters
	filterHandler = (e, name) => {
		console.log(e, name);
		//Set new title for filters
		let newTitle;
		if(e){
			newTitle = e.target.innerHTML;
		}else{
			newTitle = name;
		}
		
		
		//Set new displays product if filters is active
        if(newTitle !== 'All'){
			let filteredProd = allProducts.filter(elem => {
				if(elem.filterProps === newTitle){
					return elem
				}
			})

            this.setState({
				products: filteredProd,
				title: newTitle,
			})
			//if filters no active set default page
        }else{
			this.setState({
				products: allProducts,
				title: '',
            })
		}
	}


	//CART -----------------------------------
	addToCart = (id) => {
		let newProdInCart = allProducts.find(elem => {
			return elem.id === id
		})
		console.log(newProdInCart);
		let cart = this.state.cart;
		
		if(!cart.includes(newProdInCart)){
			cart.push(newProdInCart)
		}

		newProdInCart.inCart++;

		let moneyInCart = 0; 
		let cartLength = 0;

		this.state.cart.forEach(elem => {
			moneyInCart += Number(elem.price) * Number(elem.inCart)
			cartLength += Number(elem.inCart)
		})

		this.setState({
			cart: cart,
			moneyInCart: moneyInCart,
			cartLength: cartLength,
		})
	}

	componentWillUpdate(prevProps, prevState){
		if(window.location.pathname === '/products'){
			localStorage.setItem('product', prevState.currProdPageID)
		}
	}

	getProductIdWhenReaload = () => {
		if(window.location.pathname === '/products'){
			console.log(11213);
			let prodId = localStorage.getItem('product');
			return prodId
		}
	}
	
  
  
    render() {

		const pageCounter = Math.ceil(this.state.products.length / 14);
		const whatPageIsActive = Math.floor(this.state.pagination[1] / 14);
		let prodId;
		window.onload = this.getProductIdWhenReaload()

		return(
			<div className="App">
				<Header navHandl={this.changeNavHandler}
				moneyCart={this.state.moneyInCart}
				countProductInCart={this.state.cartLength}/>
				
				<Switch>
					{/* ROUTE FOR SHOW DEFAUL SHOPPING PAGE (MAIN PAGE) */}
					<Route exact path="/" component={
						MainPage.bind(this, {
							// Props for FILTERS
						filterHandler: this.filterHandler, 
						title: this.state.title,
							// Props for cards with product
						products: [...this.state.products],
						pagination: this.state.pagination,
						openPage: this.openProdPageHandler,
						addToCart: this.addToCart,
							// Props for pagination
						pageCounter: pageCounter,
						pagiHandler: this.paginationHandler,
						activePage: whatPageIsActive,
					})} />


					{/* ROUTE FOR SHOW SINGLE PRODUCT PAGE */}
					<Route exact path="/products" component={
						ProductPage.bind(this, {
							//Props for product page
						props: this.state.currProdPageID,
						navHandl: this.changeNavHandler,
						descHandler: this.descriptionHandler.bind(this),
						reviews: this.state.reviews,
					})} />


					{/* ROUTE FOR PAGE WITH PRODUCTS CART */}
					<Route exact path="/cart" component={Cart.bind(this, {
						cart: this.state.cart,
					})}/>

					{/* ROUTE FOR 404 */}
					<Route component={notFound}/>
				</Switch>

				<Footer />
			</div>
		)
    }
}

export default App;
