import React from "react";
import Card from './card.comp'
import Player from "./player.comp";

export default function Sections({ data }) {
    // console.log('data: ', data);
    return (
        <>
            <section className="catalog">
                <h2 className="visually-hidden">Список треков</h2>
                <div className="catalog__container">
                    <Card
                        data={data}
                    />
                    <button className="catalog__btn-add">
                        <span>Увидеть все</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                        </svg>
                    </button>
                </div>
            </section>

            <Player />
        </>
    )
}