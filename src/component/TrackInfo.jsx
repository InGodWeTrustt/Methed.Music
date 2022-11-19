import React from 'react'

export default function TrackInfo({title, artist}) {
    return (
        <>
            <div className="track__info track-info">
                <p className="track-info__title">{title}</p>
                <p className="track-info__artist">{artist}</p>
            </div>
        </>
    )
}