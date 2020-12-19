import React from 'react'
import './Slider.scss';

const Slider = (props) => {

    let state = {
        count: 0
    }

    const sliderHandler = (e) => {
        if(e.target.classList.contains('next')){
            if(state.count < props.photos.length-1){
                state.count +=1;
                document.querySelector('.slider').style.transform = `translateX(-${state.count * 100}%)`
            }
            
        }else{
            if(state.count > 0){
                state.count--;
                document.querySelector('.slider').style.transform = `translateX(-${state.count * 100}%)`
            }
        }
    }

    return(
        <div className="slider-wrapper">
                <div className="slider-btn prev" onClick={sliderHandler}>&lt;</div>
            <div className="slider">
                {props.photos.map((photo, index) => {
                    return(
                        <img src={photo} key={index} alt={index} className="slider-item"></img>
                    )
                })}
            </div>
                <div className="slider-btn next" onClick={sliderHandler}>&gt;</div>
            <div className="all-photo">
                {props.photos.map((photo, index) => {
                    return(
                        <img src={photo} key={index} alt={index} className="photo-item"></img>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider
