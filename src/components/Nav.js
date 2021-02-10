import React, {useEffect, useState} from 'react';

function Nav() {
    const [navActive, setNavActive] = useState(false);
    const [scroll, setScroll] = useState(0);
    const navScrolling = {
        width: `${scroll}%`
    }
    /* toggle open & close nav */
    const openNav = () => {
        let nav = document.querySelector('.nav')
        nav.style.height = "100vh";
        nav.querySelector(".fa-bars").style.display = "none";
        nav.querySelector('.nav-scrolling').style.display = "none";
        nav.querySelector('.fa-times').style.display = "block";
        setTimeout(function(){
            nav.querySelector('nav').style.display = "block";
        },200)
    }
    const closeNav = () => {
        let nav = document.querySelector('.nav')
        nav.style.height = "auto";
        nav.querySelector('.fa-bars').style.display = "block";
        nav.querySelector('.fa-times').style.display = "none";
        nav.querySelector('.nav-scrolling').style.display = "block";
        nav.querySelector('nav').style.display = "none";
    }
    useEffect(() => {
        const  navColor = () =>{
            /* nav change bg color >> onscroll */
            window.scrollY > 70 ? setNavActive(true) : setNavActive(false);
            /* nav scroll bar width >> on scroll*/
            setScroll(
                (window.pageYOffset/(document.body.offsetHeight - window.innerHeight )*100)*100/100
            )
        }
        window.addEventListener('scroll', navColor);
        return () => {
            window.removeEventListener('scroll', navColor)
        }
    }, [scroll])
    return ( 
        <div className={`nav ${navActive? `nav-active` : '' }`}>
            <div className="nav-scrolling" style={navScrolling}></div>
            <i className="fa fa-bars icon-toggle" onClick={openNav}></i>
            <i className="fa fa-times icon-toggle" onClick={closeNav}></i>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="logo">
                            <a  to="#">Foodie</a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <nav>
                            <ul className="row">
                                <li className="col">
                                    <a href="#">Home</a>
                                </li>
                                <li className="col">
                                    <a href="#about">About</a>
                                </li>
                                <li className="col">
                                    <a href="#">Services</a>
                                </li>
                                <li className="col">
                                    <a href="#">Blog</a>
                                </li>
                                <li className="col">
                                    <a href="#">Markting</a>
                                </li>
                                <li className="col">
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
