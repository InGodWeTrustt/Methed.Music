import React from "react";
import Logo from '../img/logo.svg'

export default function Header() {
    return (
        <header className="header">
            <h1 className="visuality-hidden">Methed.Music - лучший сервис для воспроизведения качественной музыки</h1>
            <div className="header__container">
                <img className="header__logo" src={Logo} alt="Логотип Methed.Music"></img>

                <form className="header__search search">
                    <input className="search__input" type='search'></input>
                    <button className="search__btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
                        </svg>
                    </button>

                    <button className="header__favorite-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"  />
                        </svg>
                    </button>
                </form>
            </div>
        </header>
    )
}