import React, { useMemo, useState } from "react";
import { dataMusic } from "../db/dataMusic";
import Header from "./Header.jsx";
import MusicPlayer from "./MusicPlayer.jsx";

export default function App() {
    const [tracks, setTracks] = useState(dataMusic)

    const searchQuery = ''
    const searchTrack = useMemo(()=> {
        return tracks.filter(track => track.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [])

    return (
        <>
            <Header />
            <MusicPlayer tracks={tracks}></MusicPlayer>
        </>
    )
}