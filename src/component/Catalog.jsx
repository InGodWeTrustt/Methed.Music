import React from "react";
import Mybutton from "../UI/button/MyButton.jsx";
import TrackList from "./TrackList.jsx";
import MusicPlayer from './MusicPlayer.jsx'

export default function Catalog({ tracks }) {

    return (
        <>
           
            <MusicPlayer tracks={tracks} cur></MusicPlayer>
        </>
    )
}