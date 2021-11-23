import React from 'react'
import './Contact.scss';
import github from '../../assets/header/github.svg';
import linked from '../../assets/header/linked.svg';

export const Contact = () => {
    return (
        <div className="container__contact">
            <h1>Contacta Conmigo</h1>
            <div className="card__container">
                <div className="card__contact">
                    <h3>cell</h3>
                    <h2>934 529 954</h2>
                </div>
                <div className="card__contact">
                    <h3>email</h3>
                    <h2>romelx23@gmail.com</h2>
                </div>
            </div>
            <hr />
            <div className="container__footer">
                <h3>Innovación de proyectos en el tiempo</h3>
                <div className="content__images">
                    <img src={github} alt="github" />
                    <img src={linked} alt="linked" />
                </div>
            </div>
        </div>
    )
}
