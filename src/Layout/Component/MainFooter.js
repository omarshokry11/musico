import React from "react";
import {Link} from "react-router-dom";

import "./Style/MainFooter.scss";

export default function MainFooter() {
    return(
        <div className="main-footer-container">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h3>Services</h3>
                            <input type="text" placeholder="Enter your mail" />
                            <button>Subscribe</button>
                            <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h3>Contact Me</h3>
                            <span>conbusi@support.com</span>
                            <span>+10 873 672 6782</span>
                            <span>600/D, Green road, Kings Garden NewYork-6732</span>
                            <div className="icon">
                                <i className="fab fa-facebook-f"> </i>
                                <i className="fab fa-google-plus-g"> </i>
                                <i className="fab fa-twitter"> </i>
                                <i className="fab fa-youtube"> </i>
                                <i className="fab fa-instagram"> </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Copyright &copy; 2022 All rights reserved | This template is made with <i className="far fa-heart"> </i> by <span>Colorlib</span></p>
                        </div>
                        <div className="col-md-6 col-12">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/track">Tracks</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/element">Element</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}