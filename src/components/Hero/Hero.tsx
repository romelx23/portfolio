import React from 'react'
import './Hero.scss';
// import angular from '../../assets/hero/angular.svg';
// import react from '../../assets/hero/react.svg';
// import vue from '../../assets/hero/vue.svg';
// import html from '../../assets/hero/html.svg';
// import css from '../../assets/hero/css.svg';
// import sass from '../../assets/hero/sass.svg';
// import bomberman from '../../assets/hero/bomberman.svg';
import { Images } from '../../pathImages';
export const Hero = () => {
    return (
        <div className="container__hero">
            <div className="hero__info">
                <h2 className="hero__subtitle">Hola</h2>
                <h1 className="hero__title">Soy Romel</h1>
            </div>
            <div className="hero__images">
                <img src={Images.bomberman} className="bomberman" alt="bomberman" />
                <img className="tech" src={Images.react} alt="react" />
                <img className="tech" src={Images.vue} alt="vue" />
                <img className="tech" src={Images.angular} alt="angular" />
                <img className="tech" src={Images.css} alt="css" />
                <img className="tech" src={Images.html} alt="html" />
                <img className="tech" src={Images.sass} alt="sass" />
            </div>
        </div>
    )
}
