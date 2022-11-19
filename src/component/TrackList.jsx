import React, { useState } from "react";
import imagesList from '../db/imagesList'
import tracksList from '../db/audioTracksList'
import Mybutton from "../UI/button/MyButton.jsx";
import TrackInfo from "./TrackInfo.jsx";
import MyImg from "../UI/image/MyImg";

export default function TrackList({ data }) {

    return (
        <>
            {data.map(({ title, artist, id, mp3, poster: src }) => {
                const src = imagesList.shift()
                const artistWithTitle = `${artist} - ${title}`
                return (
                    <Mybutton
                        key={id}
                        className="catalog__item track"
                        data-track={mp3}
                        data-idtrack={id}
                        onClick={''}

                    >
                        <div className="track__img-wrap">
                            <MyImg
                                className={'track__poster'}
                                src={src}
                                alt={artistWithTitle}
                                height={180}
                                width={180}
                            />

                           <TrackInfo artist={''} title={''}></TrackInfo>
                        </div>
                    </Mybutton> 
                )
            })}
        </>
    )
}