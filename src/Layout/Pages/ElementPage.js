import React from "react";
import CoverPages from "../Component/CoverPages";
import SampleButtons from "../Component/Block/SampleButtons";
import AlignedComponent from "../Component/Block/AlignedComponent";
import DefinitionElements from "../Component/Block/DefinitionElements";

import "./Style/ElementPage.scss";

export default function ElementPage() {
    return(
        <div className="main-element-page-container">
            <CoverPages title="ELEMENTS" />
            <div className="main-element-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="item">
                                <h3>Text Sample</h3>
                                <p>
                                    Every avid independent filmmaker has <strong>Bold</strong> about making that Italic interest documentary, or short film to show off their creative prowess. Many have
                                    great ideas and want to “wow” the<sup>Superscript</sup> scene, or video renters with their big project. But once you have the<sup>Subscript</sup> “in the can” (no easy feat), how do
                                    you move from a <del>Strike</del> through of master DVDs with the <u>“Underline”</u> marked hand-written title inside a secondhand CD case, to a pile of cardboard
                                    boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have
                                    your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure
                                    a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:
                                </p>
                            </div>
                        </div>
                        <div className="col-12"><SampleButtons /></div>
                        <div className="col-12"><AlignedComponent /></div>
                        <div className="col-12"><DefinitionElements /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}