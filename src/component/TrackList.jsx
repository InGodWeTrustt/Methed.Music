import React, { useState } from "react";
import Mybutton from "../UI/button/MyButton.jsx";
import TrackInfo from "./TrackInfo.jsx";
import MyImg from "../UI/image/MyImg.jsx";

export default function TrackList({ data: tracks, setTrackID, setTrackInfo, setIsActivePlayer }) {
    return (
        <>
            {tracks.map(({ title, artist, id, poster: imgSrc }) => {
                const artistWithTitle = `${artist} - ${title}`
                return (
                    <Mybutton
                        key={id}
                        className="catalog__item track"
                        data-idtrack={id}
                        onClick={e => {
                            const track = e.currentTarget;
                            const trackId = e.currentTarget.dataset.idtrack
                            setTrackID(trackId)
                            const trackInfo = tracks.find(track => track.id === trackId)
                            setTrackInfo(trackInfo)
                            setIsActivePlayer(true)
                            }}
                    >
                        <div className="track__img-wrap">
                            <MyImg
                                className={'track__poster'}
                                src={imgSrc}
                                alt={artistWithTitle}
                                height={180}
                                width={180}
                            />

                            <TrackInfo artist={artist} title={title}></TrackInfo>
                        </div>
                    </Mybutton>
                )
            })}
        </>
    )
}