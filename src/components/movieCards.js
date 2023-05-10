import "../css/projectCardstyle.css";
import React from 'react'
const Moviecards = (props) => {
    return (
        
        <div className="project-card">
        <img src={props.image} alt="true" />
        <h2 className="project-title">{props.movie} </h2>
        <h4 className="project-title">Flim by :{props.director}</h4>
        <h4 className="project-title">Production :{props.production}</h4>
        <div className="pro-details">
            <p>{props.description} </p>
           
        </div>
    </div>
    )
}

export default Moviecards