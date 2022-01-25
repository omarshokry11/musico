import React, {useState} from "react";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import DropdownList from "./Block/DropdownList";

import "./Style/MainNavbar.scss";

export default function MainNavbar() {

    const [click, setClick] = useState();

    const mainNavbar = [
        {id: 1, class: "col-lg-2 col-12", logo: [{id: 1, img: "/img/logo.webp"}]},
        {id: 2, class: "col-lg-7 col-12 text-center d-lg-block d-none", linkPages: [
                {id: 1, linkPath: "/", linkName: "Home"},
                {id: 2, linkPath: "/about", linkName: "About"},
                {id: 3, linkPath: "/track", linkName: "Tracks"},
                {id: 4, linkPath: "/blog", linkName: "Blog"},
                {id: 5, linkPath: "/element", linkName: "Elements"},
                {id: 6, linkPath: "/contact", linkName: "Contact"},
            ]
        },
        {id: 3, class: "col-lg-3 col-12 d-lg-block d-none", icons: [
                {id: 1, icon: "fab fa-facebook-f"},
                {id: 2, icon: "fab fa-twitter"},
                {id: 3, icon: "fab fa-instagram"},
            ]}
    ]

    return(
        <div className="main-nav-bar-container">
            <div className="container-fluid">
                <div className="row">
                    {mainNavbar.map((item) => <div className={item.class} key={item.id}>
                        {item.logo ? <Image src="/img/logo.webp" /> : null}
                        {item.linkPages ? <ul className="link-list">
                            {item.linkPages.map((link) => <li key={link.id}><Link to={link.linkPath}>{link.linkName}</Link></li>)}
                        </ul> : null}
                        {item.icons ? <div className="icon">{item.icons.map((icon) => <i className={icon.icon} key={icon.id}> </i>)}</div> : null}
                    </div>)}
                </div>
            </div>
            <div className="dropdown-list d-block d-lg-none" onClick={() => setClick(!click)}>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
            {click ? <DropdownList /> : null}
        </div>
    )
}