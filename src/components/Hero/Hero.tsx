import React from 'react'
import './Hero.scss';
import angular from '../../assets/hero/angular.svg';
import react from '../../assets/hero/react.svg';
import vue from '../../assets/hero/vue.svg';
import html from '../../assets/hero/html.svg';
import css from '../../assets/hero/css.svg';
import sass from '../../assets/hero/sass.svg';
import bomberman from '../../assets/hero/bomberman.svg';
export const Hero = () => {
    return (
        <div className="container__hero">
            <div className="hero__info">
                <h2 className="hero__subtitle">Hola</h2>
                <h1 className="hero__title">Soy Romel</h1>
            </div>
            <div className="hero__images">
                <img src={bomberman} className="bomberman" alt="bomberman" />
                <img className="tech" src={react} alt="react" />
                <img className="tech" src={vue} alt="vue" />
                <img className="tech" src={angular} alt="angular" />
                <img className="tech" src={css} alt="css" />
                <img className="tech" src={html} alt="html" />
                <img className="tech" src={sass} alt="sass" />
            </div>
        </div>
    )
}
