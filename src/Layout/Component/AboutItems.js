import React from "react";
import {Image} from "react-bootstrap";

import "./Style/AboutItems.scss";

export default function AboutItems() {
    return(
        <div className="main-about-items-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <Image src="/img/about-1.webp" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="item-details">
                            <h1>Jack Kalib</h1>
                            <p>
                                Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression enim ad minim
                                veniam quis nostrud exercitation we have supported programmes to help alleviate human suffering through animal welfare when people might depend.
                            </p>
                            <Image src="/img/xsignature.png.pagespeed.ic.P_cXClvW68.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}