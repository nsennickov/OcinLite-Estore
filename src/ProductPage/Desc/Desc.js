import React from "react";
import './Desc.scss';

const Desc = (props) => {

    if(props.reviews){
        return(
            <div className="desc-container">
                <div className={props.reviews ? "desc-btn active" : "desc-btn"}  onClick={props.descHandler}>Reviews(0)</div>
                <div className={props.reviews ? "desc-btn" : "desc-btn active"} onClick={props.descHandler}>Description</div> 
                
                <div className="desc-wrapper">
                    <h1>Reviews</h1>

                    {getReviews(props.props.name)}
                </div>
                
            </div>
            )
        }else{
            return(
                <div className="desc-container">
                    <div className={props.reviews ? "desc-btn active" : "desc-btn"}  onClick={props.descHandler}>Reviews(0)</div>
                    <div className={props.reviews ? "desc-btn" : "desc-btn active"} onClick={props.descHandler}>Description</div> 
                    
                    <div className="desc-wrapper">
                        <h1>Description</h1>

                        {getDesc(props.props)}
                    </div>
                    
            </div>
        )
    }
}

function getDesc(elem){
    
    let array = Object.entries(elem.desc);

    return(
        array.map((elem, index) => {
            if(elem[0] !== 'prod_info'){
                return(
                    <h3 key={index} className="desc-row">{elem[0].toUpperCase()}: <br/>
                        <p className="desc">{elem[1]}</p>
                    </h3>
                )
            }else{
                return(
                    <h3 key={index} className="desc-row">PRODUCT INFO: <br/>
                        <p className="desc">{elem[1]}</p>
                    </h3>
                )
            }
            
        })
    )
}

function getReviews(name){
    return(
        <p>{name} reviews here</p>
    )
}

export default Desc