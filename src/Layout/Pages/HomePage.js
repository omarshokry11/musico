import React from "react";
import HomeCover from "../Component/HomeCover";
import AboutItems from "../Component/AboutItems";
import TrackItems from "../Component/TrackItems";
import TracksItems from "../Component/Block/TracksItems";
import ImageGalleries from "../Component/ImageGalleries";
import ContactItem from "../Component/ContactItem";

export default function HomePage() {
    return(
        <div className="main-home-page-container">
            <HomeCover />
            <AboutItems />
            <TrackItems />
            <TracksItems />
            <ImageGalleries />
            <ContactItem />
        </div>
    )
}