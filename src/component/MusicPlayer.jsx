import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const MusicPlayer = ({ data = { artist: 'Имя артиста', title: "Название трека" } }) => {

    const { artist, title } = data
    const [progressInput, setProgressInput] = useState(0)
    const [timePassed, setTimePassed] = useState('0:00')
    const [timeTotal, setTimeTotal] = useState('0:00')

    return (
        <>
            <section className="player player_active">
                <h1 className="visually-hidden">Плеер</h1>
                <div className="player__container">
                    <div className="player__track-info track-info track-info_mobile-center">
                        <p className="player-info__title">{artist}</p>
                        <p className="player-info__artist">{title}</p>
                    </div>
                    <div className="player__controller">
                        <MyButton className="player__icon player__icon_stop"></MyButton>
                        <MyButton className="player__icon player__icon_prev"></MyButton>
                        <MyButton className="player__icon player__icon_pause"></MyButton>
                        <MyButton className="player__icon player__icon_next"></MyButton>
                        <MyButton className="player__icon player__icon_like"></MyButton>
                    </div>

                    <div className="player__progress-wrap">
                        <div className="player__progress">
                            <MyInput
                                type="range"
                                className="player__progress-input"
                                min="0"
                                max="100"
                                value={progressInput}
                            />
                        </div>
                        <p className="player__time">
                            <span className="player__time-passed">{timePassed}</span>
                            <span>/</span>
                            <span className="player__time-total">{timeTotal}</span>
                        </p>
                    </div>

                    <div className="player__volume-wrap">
                        <div className="player__volume">
                            <MyInput
                                className="player__volume-input"
                                type="range"
                                min="0"
                                max="100"
                                value="100"
                            />
                        </div>
                        <MyButton className="player__icon player__icon_mute"></MyButton>
                    </div>
                </div>
            </section>
        </>
    )
}


export default MusicPlayer