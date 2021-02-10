import React from 'react'
function FavoriteItem({name, cheeseName, price, src}) {
    return (
            <div className="favorite-items">
                <div className="content">
                    <div className="img">
                        <img src={src}  className="img-fluid" />
                    </div>
                    <div className="data">
                        <h4 className="name">
                            {name}
                        </h4>
                        <h5 className="cheese-name">
                            {cheeseName}
                        </h5>
                        <h6 className="price">
                            {price}
                        </h6>
                    </div>
                </div>
            </div>
    )
}

export default FavoriteItem
