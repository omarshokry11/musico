import React from "react";
import {Image} from "react-bootstrap";

import "./Style/ImageGalleries.scss";

export default function ImageGalleries() {

    const imageGalleries = [
        {id: 1, className: "col-lg-5 col-12", img: "/img/about-6.webp"},
        {id: 2, className: "col-lg-7 col-12", img: "/img/about-5.webp"},
        {id: 3, className: "col-lg-4 col-12", img: "/img/about-3.webp"},
        {id: 4, className: "col-lg-4 col-12", img: "/img/about-4.webp"},
        {id: 5, className: "col-lg-4 col-12", img: "/img/about-2.webp"},
    ]

    return(
        <div className="main-image-galleries-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Image Galleries</h1>
                    </div>
                    {imageGalleries.map((item) => <div className={item.className} key={item.id}>
                        <div className="item">
                            <div className="background-color"> </div>
                            <div className="icon">
                                <i className="fas fa-plus"> </i>
                            </div>
                            <div className="img">
                                <Image src={item.img} />
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}