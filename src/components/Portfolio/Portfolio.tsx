import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import './Portfolio.scss'
import { GetProjects } from '../../Api/Projects';
import { Projects } from '../../interfaces/ProyectsInterface';
export const Portfolio = () => {
    const [repo, setRepo] = useState<Projects[]>([]);
    const projects = async () => {
        const repositories: Projects[] = await GetProjects();
        setRepo(repositories)
    }
    useEffect(() => {
        projects()
    }, []);
    // console.log(repo);
    return (
        <div className="container__portfolio">
            <h1 className="portafolio__title">Portafolio</h1>
            <div className="container__cards">
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
                {
                    repo.map((item:Projects)=>{
                        console.log('hola');
                        return <Card item={item} key={item.id}/>
                    })
                }
            </div>
        </div>
    )
}
