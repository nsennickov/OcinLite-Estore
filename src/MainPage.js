import React from "react";
import Wrapper from "./hoc/Wrapper";
import Filters from "./Filters/Filters";
import Product from "./Products/Products";
import Pagination from "./Pagination";

const MainPage = (props) => {
	console.log(props);
    return(
        <Wrapper>
            <Filters filterHandler={props.filterHandler} title={props.title}/>

            <div className="products-wrapper">
				{props.products.map((prod, index) => {
					if(props.pagination[0]-1 <= index && index < props.pagination[1]){
						return(
							<Product 
								{...prod}
								key={index}
								openPage={props.openPage}
								addToCart={props.addToCart}
							/>
						)
					}
				})}
			</div>

            <div className="pagination-wrap">
				{/* 
					count = how much pages need to display;  nextPage = func that changes pages;  active = what page is active now;
				*/}
				<Pagination count={props.pageCounter} nextPage={props.pagiHandler} active={props.activePage}/>
			</div>

        </Wrapper>
    )
}

export default MainPage