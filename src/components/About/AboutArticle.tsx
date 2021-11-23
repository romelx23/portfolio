import React from 'react'
import './About.scss'
export const AboutArticle = () => {
    return (
        <div className="container__about">
            <h1>Sobre Mi</h1>
            <h3>Soy un Estudiante de Ingeniería de Sistemas</h3>
            <h3>que busca aportar valor a la empresa con los conocimientos adquiridos durante</h3>
            <h3>mis estudios</h3>
            <div className="content__timeline">
                <div className="card__time">
                    <h2>2018</h2>
                    <h3>sql,oracle</h3>
                </div>
                <div className="card__time">
                    <h2>2019</h2>
                    <h3>Javascript
                    css, scss</h3>
                </div>
                <div className="card__time">
                    <h2>2020</h2>
                    <h3>React</h3>
                </div>
                <div className="card__time">
                    <h2>2021</h2>
                    <h3>Node, Mongo DB</h3>
                </div>
            </div>
            <hr />
        </div>
    )
}
