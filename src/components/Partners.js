import React from 'react'
import partnerImg1 from '../img/partner (1).jpg';
import partnerImg2 from '../img/partner (2).jpg';
import partnerImg3 from '../img/partner (3).jpg';
import partnerImg4 from '../img/partner (4).jpg';
import partnerImg5 from '../img/partner (1).png';
function Partners() {
    return (
        <div className="partners">
            <div className="container">
                <div className="row">
                    <div className="col-12 heading">
                        <h2>Our Partners</h2>
                        <h4>We are working with top Restaurnts</h4>
                    </div>
                    <div className="col">
                        <img src={partnerImg1} className="img-fluid" />
                    </div>
                    <div className="col">
                        <img src={partnerImg2} className="img-fluid" />
                    </div>
                    <div className="col">
                        <img src={partnerImg3} className="img-fluid" />
                    </div>
                    <div className="col">
                        <img src={partnerImg4} className="img-fluid" />
                    </div>
                    <div className="col">
                        <img src={partnerImg5} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
