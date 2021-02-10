import React from 'react'
import FavoriteItem from './FavoriteItem'
import Pizza1 from '../img/pizza (3).png'
import Pizza2 from '../img/pizza (4).png'
import Pizza3 from '../img/pizza (5).png'
function Favorite() {
    return (
        <div className="favorite">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center heading">
                        <h2>Choose your</h2>
                        <h4>Favorite flavour</h4>
                    </div>
                    <div className="col-12 items">
                        <div className="row">
                            <div className="col-md-4 fr">
                                <FavoriteItem
                                    name="Shrimp Pizza"
                                    cheeseName="cheese with shrimp"
                                    price="18$.00"
                                    src={Pizza1}
                                />
                            </div>
                            <div className="col-md-4 sec">
                                <FavoriteItem
                                    name="Seafood Pizza"
                                    cheeseName="Olive with cheese"
                                    price="22$.00"
                                    src={Pizza2}
                                />
                            </div>
                            <div className="col-md-4 thr">
                                <FavoriteItem
                                    name="Cheese Pizza"
                                    cheeseName="cheese wit"
                                    price="19$.00"
                                    src={Pizza3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorite;
