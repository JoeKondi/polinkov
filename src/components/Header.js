import React, { Component } from 'react';
class Header extends Component{
    render(){
        return(
            <div>
            {/* <!-- header --> */}
                <header>
                    <div className="container">
                        <div className="header d-lg-flex justify-content-between align-items-center">
                            <div className="header-agile">
                                <h1>
                                    <a className="navbar-brand logo" href="index.html">
                                        <span className="fa fa-scissors" aria-hidden="true" ></span> Men spa	<span className="fa fa-user-secret" aria-hidden="true" ></span>
                                    </a>
                                </h1>
                            </div>
                            <div className="nav_w3ls">
                                <nav>
                                    <label htmlFor="drop" className="toggle mt-lg-0 mt-1"><span className="fa fa-bars" aria-hidden="true"></span></label>
                                    <input type="checkbox" id="drop" />
                                        <ul className="menu">
                                            <li className="mr-lg-3 mr-2 active"><a href="index.html">Home</a></li>
                                            <li className="mr-lg-3 mr-2"><a href="about.html">About </a></li>
                                            <li className="mr-lg-3 mr-2 p-0">
                                            {/* <!-- First Tier Drop Down --> */}
                                            <label htmlFor="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                                            <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                                            <input type="checkbox" id="drop-2"/>
                                            <ul className="inner-dropdown">
                                                <li><a href="services.html">What We Do</a></li>
                                                <li><a href="single.html">See more</a></li>
                                            </ul>
                                            </li>
                                            <li className="mr-lg-3 mr-2"><a href="gallery.html">Gallery</a></li>
                                            <li className="mr-lg-3 mr-2"><a href="contact.html">Contact Us</a></li>
                                            

                                        </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </header>
                {/* <!-- //header --> */}
                </div>
        );
    }
}
export default Header;