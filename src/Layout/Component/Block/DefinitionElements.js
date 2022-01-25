import React from "react";

import "./Style/DefinitionElements.scss";

export default function DefinitionElements() {

    const definitionItems = [
        {id: 1, h5: "Definition 01", p: "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system.\n" +
                "As a result of this law, most of the popular online casino networks"},
        {id: 2, h5: "Definition 02", p: "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system.\n" +
                "As a result of this law, most of the popular online casino networks"},
        {id: 3, h5: "Definition 03", p: "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system.\n" +
                "As a result of this law, most of the popular online casino networks"}
    ]

    return(
        <div className="main-definition-elements-container">
            <h3>Definition</h3>
            <div className="definition-item">
                {definitionItems.map((item) =>
                    <div className="item" key={item.id}>
                        <h5>{item.h5}</h5>
                        <p>{item.p}</p>
                    </div>
                )}
            </div>
            <div className="block-quotes-item">
                <h3>Block Quotes</h3>
                <p>
                    “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system.
                    As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
                    online casino players found themselves being chased by the Federal government. But, after a fortnight,
                    the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella,
                    and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification
                    and start doing business with me. Listed in this article are the electronic banking”
                </p>
            </div>
        </div>
    )
}