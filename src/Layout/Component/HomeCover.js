import React from "react";
import {Image} from "react-bootstrap";

import "./Style/HomeCover.scss";

export default function HomeCover() {

    const homeCover = [
        {id: 1, title: "MUSICIAN", items: [{id: 1, img: "/img/img-cover.webp", h2: "Frando Kally", p: "10 November, 2019", span :"00:0000:02", btn: "Buy Albom"}]}
    ]

    return(
        <div className="main-home-cover-container">
            {homeCover.map((item) => <div className="items" key={item.id}>
                <h1>{item.title}</h1>
                {item.items ? <>
                    {item.items.map((i) => <>
                        <div className="item" key={i.id}>
                            <div className="img">
                                <Image src={i.img} />
                            </div>
                            <div className="details">
                                <h2>{i.h2}</h2>
                                <p>{i.p}</p>
                                <span>{i.span}</span>
                            </div>
                        </div>
                        <div className="buttons">
                            <button>{i.btn}</button>
                        </div>
                    </>)}
                </> : null}
            </div>)}
        </div>
    )
}