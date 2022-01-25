import React from "react";
import {Image} from "react-bootstrap";
import CoverPages from "../Component/CoverPages";
import AboutItems from "../Component/AboutItems";
import ImageGalleries from "../Component/ImageGalleries";
import ContactItem from "../Component/ContactItem";

export default function AboutPage() {
    return(
        <div className="main-about-page-container">
            <CoverPages title="ABOUT ME" />
            <AboutItems />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cover-about">
                            <div className="icon">
                                <i className="fas fa-play"> </i>
                            </div>
                            <Image src="/img/img-cover.webp" />
                        </div>
                    </div>
                </div>
            </div>
            <ImageGalleries />
            <ContactItem />
        </div>
    )
}