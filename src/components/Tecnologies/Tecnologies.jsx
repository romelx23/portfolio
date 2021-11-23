import React from "react";
import "./Tecnologies.scss";
export const Tecnologies = () => {
  return (
    <div className="container__tech">
      <h1>Tecnologies</h1>
      <div className="container__cards">
        <div className="card__tech">
          <h2>Frontend</h2>
          <h3>Experiencia con React.js</h3>
        </div>
        <div className="card__tech">
          <h2>Backend</h2>
          <h3>Experiencia con Node y Databases</h3>
        </div>
        <div className="card__tech">
          <h2>UI/UX</h2>
          <h3>Experiencia con Figma</h3>
        </div>
      </div>
    </div>
  );
};
