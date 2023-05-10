import "../css/projectCardstyle.css";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Moviecards from "./movieCards";
import Navbar from "./Navbar";
const Movie = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {

        async function getData() {
            let data = await axios.get("https://movie-search-org.onrender.com/api/movies/get")
            setApiData(data.data);
        }
        getData();
    }, [])
    return (
        <>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <div className="work-container">

            <div className="project-container">
                {
                    apiData.map((val, index) => {
                        return (
                           <Moviecards 
                           key={index}
                           movie={val.moviename}
                           director={val.director}
                           description={val.description}
                           image={val.image}
                           production = {val.production}
                            genre= {val.genre}
                           
                           />
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Movie;
