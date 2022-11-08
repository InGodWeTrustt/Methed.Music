import React, { useState } from "react";
import { createList } from "../DB/db_img";
import Header from "./header.comp";
import Section from './section.comp'

export default function App(){
    const [data, setData] = useState(createList())
    return (
        <>
            <Header></Header>
            <Section data={data}></Section>
        </>
    )
}