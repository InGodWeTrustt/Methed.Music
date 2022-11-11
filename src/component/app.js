import React, { useState } from "react";
import { createList } from "../DB/db_img";
import Header from "./header.comp";
import Sections from './section.comp'

export default function App(){
    const [data, setData] = useState(createList())
    return (
        <>
            <Header />
            <Sections data={data}></Sections>
        </>
    )
}