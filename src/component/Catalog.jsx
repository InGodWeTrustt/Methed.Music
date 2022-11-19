import React from "react";
import Mybutton from "../UI/button/MyButton.jsx";
import TrackList from "./TrackList.jsx";
import MusicPlayer from './MusicPlayer.jsx'

export default function Catalog({ tracks }) {

    return (
        <>
            <section className="catalog">
                <h2 className="visually-hidden">Список треков</h2>
                <div className="catalog__container">
                    <TrackList data={tracks} />
                    <Mybutton className='catalog__btn-add'>
                        <span>Увидеть все</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                        </svg>
                    </Mybutton>
                </div>
            </section>
            <MusicPlayer></MusicPlayer>
        </>
    )
}