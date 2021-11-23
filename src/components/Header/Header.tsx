import React from 'react';
import { Images } from '../../pathImages';
import './Header.scss'
// import github from '../../assets/header/github.svg';
// import bullet from '../../assets/header/bullet.svg';
// import linked from '../../assets/header/linked.svg';
export const Header = () => {
    return (
        <div className="container__header">
            <h1 className="icon__nav__logo" >Romel</h1>
            <div className="content__images">
                <img className="icon__nav" src={Images.github} alt="github" />
                <img className="icon__nav" src={Images.linked} alt="linked" />
                <img className="icon__nav" src={Images.bullet} alt="bullet" />
            </div>
        </div>
    )
}
