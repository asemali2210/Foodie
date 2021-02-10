import React, { useState } from 'react';
import chef from '../img/chef.jpg';
import chefHover from '../img/chef-hover.jpg';
import pizzaSlice from '../img/cursor.png';

function About() {
    /* on mouse enter >> change chef photo */
    const [chefSrc, setChefSrc] = useState(chef);

    return (
        <div className="about" id="about"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12 img">
                        <img src={chefSrc} 
                        onMouseEnter={()=> {
                            setChefSrc(chefHover)
                        }}
                        onMouseLeave={()=> {
                            setChefSrc(chef)
                        }}
                        className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-5 col-12 content">
                        <h2>We have team of</h2>
                        <h4>World's best chefs</h4>
                        <p>Award winning restaurant</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Learn more</button>
                        <img src={pizzaSlice} className="pizza-slice"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
