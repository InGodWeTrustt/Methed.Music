import React, { useState } from "react";
import Img from './img.comp'
import useAudio from "../useHook/useAudio";
import imagesList from '../DB/images'
import tracksList from '../DB/audioTracksList'

export default function Card({ data }) {

    return (
        <>
            {data.map(({ title, artist, id }) => {
                const src = imagesList.shift()
                const artistWithTitle = `${artist} - ${title}`
                return (
                    <button key={id} className="catalog__item track" data-track={artistWithTitle + '.mp3'} data-idtrack={id} onClick={''}>
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