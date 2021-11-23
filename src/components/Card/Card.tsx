import React from 'react'
import './card.scss'
import { Projects } from '../../interfaces/ProyectsInterface';
// import { Link, Router } from 'react-router-dom';
interface Props {
    item: Projects
}
export const Card = ({ item }: Props) => {
    const url_preview=`https://romelx23.github.io/${item.name}`;
    return (
        <div className="container__card">
            <div className="card">
                <h2 className="card__title">{item.name}</h2>
                <div className="card__capa"></div>
                <img src="https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/259497254_1046886402522007_3537028832082685349_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=Fzf5HG5gFkUAX-frYGb&_nc_ht=scontent.flim17-1.fna&oh=e98ebbb90a4039c0ded9155f00e60b2a&oe=619EF866" alt="sssgridman" />
                <div className="content__buttons">
                    {/* <Router> */}
                    <button className="btn__card code">
                        <a
                            className="link"
                            href={item.html_url}>
                            View Code
                        </a>
                    </button>
                    <button className="btn__card live">
                        <a 
                            className="link"
                            href={url_preview}>
                            Live Preview
                        </a>
                    </button>
                    {/* </Router> */}
                </div>
            </div>
        </div>
    )
}
