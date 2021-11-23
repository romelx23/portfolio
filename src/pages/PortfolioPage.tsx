import React from 'react';
import './PortafolioPage.scss'
import { AboutArticle } from '../components/About/AboutArticle';
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Contact } from '../components/Contact/Contact';
import { Tecnologies } from '../components/Tecnologies/Tecnologies';

export const PortfolioPage = () => {
    return (
        <div className="container__grid">
            <Header/>
            <Hero/>
            <Portfolio/>
            <Tecnologies/>
            <AboutArticle/>
            <Contact/>
        </div>
    )
}
