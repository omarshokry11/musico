import React from "react";
import {Link} from "react-router-dom";

import "./Style/DropdownList.scss";

export default function DropdownList() {

    const dropdownList = [
        {id: 1, linkPath: "/", linkName: "Home"},
        {id: 2, linkPath: "/about", linkName: "About"},
        {id: 3, linkPath: "/track", linkName: "Tracks"},
        {id: 4, linkPath: "/blog", linkName: "Blog"},
        {id: 5, linkPath: "/element", linkName: "Elements"},
        {id: 6, linkPath: "/contact", linkName: "Contact"},
    ]

    return(
        <div className="main-dropdown-list-container">
            <ul>
                {dropdownList.map((list) => <li key={list.id}><Link to={list.linkPath}>{list.linkName}</Link></li>)}
            </ul>
        </div>
    )
}