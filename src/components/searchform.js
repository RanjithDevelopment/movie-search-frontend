import React, { useState} from 'react';
import "../css/formstyles.css";
import axios from 'axios';

import Moviecards from './movieCards';
const Searchform = () => {
  const [apidata, setapidata] = useState([]);
  const [keyword, setKeyword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let filterdata = await axios.get(`https://movie-search-org.onrender.com/api/movies/getByKeyWords?keywords=${keyword}`);
    setapidata(filterdata.data);
    setKeyword("")
  }
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
<p>Enter Director name , movie Name , Producrtions House name Like Exactly given in the Movies</p>
          <label>Enter Keywords</label>
          <input name="keyword" type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />

          <button className="btn" type="submit">Search</button>
        </form>


      </div>
      {
        apidata ? <div className="work-container">

          <div className="project-container"> 
          {
            apidata.map((val,index)=>{
              return(
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
          : <></>
      }

    </>
  )
}

export default Searchform;
