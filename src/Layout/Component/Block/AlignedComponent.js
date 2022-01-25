import React from "react";
import {Image} from "react-bootstrap";

import "./Style/AlignedComponent.scss";

export default function AlignedComponent() {

    const alineItems = [
        {id: 1, className: "aline-items left-item", class: "aline-item left-aline", h4: "Left Aligned", img: "/img/aline.webp", p: "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system.\n" +
                "As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight,\n" +
                "online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root.\n" +
                "These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal.\n" +
                "A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me.\n" +
                "Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos."},
        {id: 2, className: "aline-items right-item", class: "aline-item right-aline", h4: "Right Aligned", img: "/img/aline.webp", p: "Over time, even the most sophisticated, memory packed computer can begin to run slow if we don’t do something to prevent it. " +
                "The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, " +
                "all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish. " +
                "To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. " +
                "You can do this through regular maintenance and PC performance optimization programs\n" + "Before we discuss all of the things that could be affecting your PC’s performance, " +
                "let’s talk a little about what symptoms"},
    ]

    return(
        <div className="main-aline-component-container">
            {alineItems.map((item) => <div className={item.className} key={item.id}>
                <h4>{item.h4}</h4>
                <div className={item.class}>
                    <Image src={item.img} />
                    <p>{item.p}</p>
                </div>
            </div>)}
        </div>
    )
}