import React from "react";
import {Image} from "react-bootstrap";
import CoverPages from "../Component/CoverPages";
import TracksItems from "../Component/Block/TracksItems";
import TrackItems from "../Component/TrackItems";
import ContactItem from "../Component/ContactItem";

import "./Style/TrackPage.scss";

export default function TrackPage() {
    return(
        <div className="main-track-page-container">
            <CoverPages title="MY TRACKS" />
            <TracksItems />
            <TrackItems />
            <ContactItem />
        </div>
    )
}