import React from "react";
import Photo1 from '../img/photo1.jpg'
import Card from './card.comp'

export default function Section() {
    return (
        <>
            <section className="catalog">
                <h2 className="visually-hidden">Список треков</h2>
                <div className="catalog__container">
                    <Card></Card>
                    <button className="catalog__btn-add">
                        <span>Увидеть все</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                        </svg>
                    </button>
                </div>
            </section>

            <section className="player player_active">
                <h1 className="visually-hidden">Плеер</h1>
                <div className="player__container">
                    <div className="player__track-info track-info">
                        <p className="player-info__title">Save your tears</p>
                        <p className="player_info__artist">The weeknd</p>
                    </div>
                    <div className="player__controller">
                        <button className="player__icon player__icon_stop"></button>
                        <button className="player__icon player__icon_prev"></button>
                        <button className="player__icon player__icon_pause"></button>
                        <button className="player__icon player__icon_next"></button>
                        <button className="player__icon player__icon_like"></button>
                    </div>

                    <div className="player___progress-wrap">
                        <div className="player__progress">
                            <input type="range" className="player__progress-input" min="0" max="100" value="0" />
                        </div>
                        <p className="  ">
                            <span className="player__time-passed">0:24</span>
                            <span>/</span>
                            <span className="player__time-total">4:31</span>
                        </p>
                    </div>

                    <div className="player__volume-wrap">
                        <div className="player__volume">
                            <input
                                className="player__volume-input"
                                type="range"
                                min={0}
                                max={100}
                                value={100}
                            />
                        </div>
                        <button className="player__icon player__icon_mute"></button>
                    </div>
                </div>
            </section>
        </>
    )
}