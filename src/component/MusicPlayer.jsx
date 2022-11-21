import React, { useEffect, useRef, useState } from "react";
import MyButton from "../UI/button/MyButton.jsx";
import MyInput from "../UI/input/MyInput.jsx";
import TrackList from './TrackList.jsx'

const MusicPlayer = ({ tracks }) => {

    const [trackID, setTrackID] = useState(null)
    const [trackProgress, setTrackProgress] = useState({timePassed: '0:00', timeTotal: '0:00'})
    const [isPlaying, setIsPlaying] = useState(false)
    const [isActivePlayer, setIsActivePlayer] = useState(false)
    const [trackInfo, setTrackInfo] = useState({ artist: 'Имя артиста', title: 'Название трека', audiosrc: null })

    const audioRef = useRef(new Audio(null));
    const intervalRef = useRef(null);
    const isReady = useRef(false);

    const { artist, title, mp3: audioSrc } = trackInfo

    const changeFormatTime = (currentTime, duration) => {
        const minutesPassed = Math.floor(currentTime / 60) || '0'
        const secondsPassed = Math.floor(currentTime % 60) || '0'

        const minutesDuration = Math.floor(duration / 60) || '0'
        const secondsDuration = Math.floor(duration % 60) || '0'
        return {
            timePassed: `${minutesPassed}:${secondsPassed < 10 ? `0${secondsPassed}` : secondsPassed}`,
            timeTotal: `${minutesDuration}:${secondsDuration < 10 ? `0${secondsDuration}` : secondsDuration}`
        }
    }


    const changeVolume = e => {
        audioRef.current.volume = e.currentTarget.value / 100
        lastValVol = audioRef.current.volume
    }

    const mute = e => {
        if (audioRef.current.volume) {
            e.currentTarget.previousSibling.firstChild.value = 0
            audioRef.current.volume = 0
        } else {
            audioRef.current.volume = 0.1
            e.currentTarget.previousSibling.firstChild.value = 0.1
        }
    }

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                nextTrack();
            } else {
                setTrackProgress({trackProgress,...changeFormatTime(audioRef.current.currentTime, audioRef.current.duration)})
            }
        }, [1000]);
    };

    const onScrub = (value) => {
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(changeFormatTime(audioRef.current.currentTime, audioRef.current.duration));
    };

    const onScrubEnd = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };


    const prevTrack = () => {
        if (trackID - 1 < 0) {
            setTrackID(tracks.length - 1)
        } else {
            setTrackID(trackID - 1)
        }
    }

    const nextTrack = () => {
        if (trackID < tracks.length - 1) {
            setTrackID(tracks.length + 1)
        } else {
            setTrackID(0)
        }
    }

    const stopPlayer = () => {
        setIsPlaying(!isPlaying)
        setIsActivePlayer(!isActivePlayer)
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (!trackID) return
        audioRef.current.pause();

        audioRef.current = new Audio(audioSrc);
        audioRef.current.volume = 0.1;
        setTrackProgress(changeFormatTime(audioRef.current.currentTime, audioRef.current.duration));

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }, [trackID]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <section className="catalog">
                <h2 className="visually-hidden">Список треков</h2>
                <div className="catalog__container">
                    <TrackList
                        data={tracks}
                        setTrackID={setTrackID}
                        setTrackInfo={setTrackInfo}
                        setIsActivePlayer={setIsActivePlayer}
                    />
                    <MyButton className='catalog__btn-add'>
                        <span>Увидеть все</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                        </svg>
                    </MyButton>
                </div>
            </section>
            <section className={`player ${isPlaying || isActivePlayer ? 'player_active' : ''}`}>
                <h1 className="visually-hidden">Плеер</h1>
                <div className="player__container">

                    <div className="player__track-info track-info track-info_mobile-center">
                        <p className="player-info__title">{artist}</p>
                        <p className="player-info__artist">{title}</p>
                    </div>

                    <div className="player__controller">
                        <MyButton
                            className="player__icon player__icon_stop"
                            onClick={stopPlayer}
                        ></MyButton>
                        <MyButton
                            className="player__icon player__icon_prev"
                            onClick={prevTrack}
                        ></MyButton>
                        <MyButton
                            onClick={() => { setIsPlaying(!isPlaying) }}
                            className={`player__icon 
                        ${isPlaying
                                    ? 'player__icon_pause'
                                    : 'player__icon_play'
                                }`}></MyButton>
                        <MyButton className="player__icon player__icon_next" onClick={nextTrack}></MyButton>
                        <MyButton className="player__icon player__icon_like"></MyButton>
                    </div>

                    <div className="player__progress-wrap">
                        <div className="player__progress">
                            <MyInput
                                type="range"
                                className="player__progress-input"
                                min="0"
                                max="100"
                                onChange={(e) => onScrub(e.target.value)}
                                onMouseUp={onScrubEnd}
                                onKeyUp={onScrubEnd}
                            />
                        </div>
                        <p className="player__time">
                            <span className="player__time-passed">{trackProgress.timePassed}</span>
                            <span>/</span>
                            <span className="player__time-total">{trackProgress.timeTotal}</span>
                        </p>
                    </div>

                    <div className="player__volume-wrap">
                        <div className="player__volume">
                            <MyInput
                                className="player__volume-input"
                                type="range"
                                min="0"
                                max="100"
                                onChange={changeVolume}
                            />
                        </div>
                        <MyButton
                            className="player__icon player__icon_mute"
                            onClick={mute}
                        >
                        </MyButton>
                    </div>
                </div>
            </section>
        </>
    )
}


export default MusicPlayer