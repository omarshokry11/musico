import React from "react";
import CoverPages from "../Component/CoverPages";

import "./Style/ContactPage.scss";

export default function ContactPage() {

    const iconItems = [
        {id: 1, icon: "fas fa-home", h4: "Buttonwood, California", span: "Rosemead, CA 91770"},
        {id: 2, icon: "fas fa-mobile-alt", h4: "00 (440) 9865 562", span: "Mon to Fri 9am to 6pm"},
        {id: 3, icon: "far fa-envelope", h4: "support@colorlib.com", span: "Send us your query anytime!"},
    ]

    return(
        <div className="main-contact-page-container">
            <CoverPages title="CONTACT" />
            <div className="main-contact-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Get in Touch</h4>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="contact-item">
                                <textarea placeholder="Enter Message" />
                                <input type="text" placeholder="Enter your name" />
                                <input type="email" placeholder="Enter email address" />
                                <input type="email" placeholder="Enter Subject" className="subject" />
                                <button>Send Message</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            {iconItems.map((icon) => <div className="items" key={icon.id}>
                                <div className="icon-item">
                                    <i className={icon.icon}> </i>
                                </div>
                                <div className="icon-details">
                                    <h4>{icon.h4}</h4>
                                    <span>{icon.span}</span>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}