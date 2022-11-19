import React, { useState } from "react";
import { dataMusic } from "../db/dataMusic";
import Catalog from "./Catalog";
import Header from "./Header";



export default function App() {
    const [tracks, setTracks] = useState(dataMusic)

    return (
        <>
            <Header />
            <Catalog tracks={tracks}></Catalog>
        </>
    )
}