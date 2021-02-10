import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import headerImg from '../img/header.jpg'
function Header() {
    useEffect(() => {
        /* header margin-top >> Nav height */
        (() =>{
            document.querySelector(".header").style.marginTop
            = `${document.querySelector(".nav").clientHeight}px`;
        })();
        
    }, [])
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-12 left">
                        <div className="content">
                            <h1>Todays' Special</h1>
                            <h4>Fresh Food Menu</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="header-btn">
                            <button>Order Now</button>
                        </div>
                        <div className="food_details">
                            <div>
                                <i className="fa fa-fire icon"></i>
                                <div className="cal">
                                    <strong>600</strong>
                                    <small>calorise</small>
                                </div>
                            </div>
                            <div>
                                <i className="fa fa-cheese icon"></i>
                                <div className="cheese">
                                    <strong>120G</strong>
                                    <small>Mozarella</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-12 right">
                        <img src={headerImg} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
