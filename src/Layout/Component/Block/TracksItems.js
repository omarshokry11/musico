import React from "react";
import {Image} from "react-bootstrap";

import "./Style/TracksItems.scss";

export default function TracksItems() {

    const trackItems = [
        {id: 1, img: "/img/track-1.webp", h4: "Frando Kally", p: "10 November, 2019", span: "00:0000:02", btn: "Buy Album"},
        {id: 2, img: "/img/track-2.webp", h4: "Frando Kally", p: "10 November, 2019", span: "00:0000:02", btn: "Buy Album"},
        {id: 3, img: "/img/track-3.webp", h4: "Frando Kally", p: "10 November, 2019", span: "00:0000:02", btn: "Buy Album"},
        {id: 4, img: "/img/track-4.webp", h4: "Frando Kally", p: "10 November, 2019", span: "00:0000:02", btn: "Buy Album"},
        {id: 5, img: "/img/track-5.webp", h4: "Frando Kally", p: "10 November, 2019", span: "00:0000:02", btn: "Buy Album"},
        {id: 6, img: "/img/track-6.webp", h4: "Frando Kally", p: "10 November, 2019", span: "00:0000:02", btn: "Buy Album"},
    ]

    return(
        <div className="main-tracks-items-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Latest Tracks</h1>
                    </div>
                    <div className="col-12">
                        {trackItems.map((item) => <div className="item" key={item.id}>
                            <div className="img">
                                <Image src={item.img} />
                            </div>
                            <div className="track-details">
                                <h4>{item.h4}</h4>
                                <p>{item.p}</p>
                                <span>{item.span}</span>
                            </div>
                            <div className="button">
                                <button>{item.btn}</button>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}