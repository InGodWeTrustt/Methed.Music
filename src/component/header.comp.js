import React from "react";
import Logo from './img/logo.svg'

export default function Header() {
    return (
        <header className="header">
            <h1 className="visuality-hidden">Methed.Music - лучший сервис для воспроизведения качественной музыки</h1>
            <div className="header__container">
                <img className="header__logo" src={Logo} alt="Логотип Methed.Music"></img>

                <form className="header__search search">
                <input className="search__input" type='search'></input>
                
                </form>
            </div>
        </header>
    )
}