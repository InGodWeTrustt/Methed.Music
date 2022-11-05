import React from "react";
import { createList } from "../db_img";
import Img from './img.comp'

import photo1 from '../img/photo1.jpg'
import photo2 from '../img/photo2.jpg'
import photo3 from '../img/photo3.jpg'
import photo4 from '../img/photo4.jpg'
import photo5 from '../img/photo5.jpg'
import photo6 from '../img/photo6.jpg'
import photo7 from '../img/photo7.jpg'
import photo8 from '../img/photo8.jpg'
import photo9 from '../img/photo9.jpg'
import photo10 from '../img/photo10.jpg'
import photo11 from '../img/photo11.jpg'
import photo12 from '../img/photo12.jpg'
import useAudio from "./useHook/useAudio";


// Массив импортированных изображений
const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12]

export default function Card() {
    const [playing, toogle] = useAudio()
    return (
        <>

            {createList().map(({ title, artist }) => {
                const src = images.shift()
                const artistWithTitle = `${artist} - ${title}`
                return (
                    <button className="catalog__item track" data-track={'audio/' + artistWithTitle + '.mp3'}>
                        <div className="track__img-wrap">
                            <Img
                                className={'track__poster'}
                                src={src}
                                alt={artistWithTitle}
                                height={180}
                                width={180}
                            />

                            <div className="track__info track-info">
                                <p className="track-info__title">{title}</p>
                                <p className="track-info__artist">{artist}</p>
                            </div>
                        </div>
                    </button>
                )
            })}
        </>
    )
}