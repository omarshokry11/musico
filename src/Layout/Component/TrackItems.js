import React from "react";
import {Image} from "react-bootstrap";

import "./Style/TrackItems.scss";

export default function TrackItems() {

    const trackItems = [
        {id: 1, img: "/img/track-item-1.webp"},
        {id: 2, img: "/img/track-item-2.webp"},
        {id: 3, img: "/img/track-item-3.webp"},
        {id: 4, img: "/img/track-item-4.webp"},
    ]

    return(
        <div className="main-track-items-container">
            {trackItems.map((item) => <div className="item" key={item.id}>
                <Image src={item.img} />
                <div className="icon">
                    <i className="fas fa-play-circle"> </i>
                </div>
                <div className="details-track">
                    <span>New York Show-2018</span>
                    <h4>Shadows of my dream</h4>
                </div>
            </div>)}
        </div>
    )
}