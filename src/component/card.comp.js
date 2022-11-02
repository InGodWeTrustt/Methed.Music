import React from "react";
import { createList } from "../db_img";
import Img from './img.comp'

export default function Card() {
    return (
        <>
            <button className="catalog__item track">
                {createList.map( ({src, title, artist}) => {
                    return (
                        <div className="track__img-wrap">
                            <Img
                                className={'track__poster'}
                                src={src}
                                alt={`${artist} - ${title}`}
                                height={180}
                                width={180}
                            />

                            <div className="track__info track-info">
                                <p className="track-info__title">{title}</p>
                                <p className="track_info__artist">{artist}</p>
                            </div>
                        </div>
                    )
                })}
            </button>
        </>
    )
}