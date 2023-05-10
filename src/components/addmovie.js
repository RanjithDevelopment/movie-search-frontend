import React,{useState} from 'react'

import axios from 'axios';
import "../css/addmoviestyles.css";
import Navbar from './Navbar';


const Addmovie = () => {
   
    let formValues = {

        moviename: "",
        director: "",
        description: "",
        genre: "",
        image: "",
        production: "",
        error: {
            moviename: "",
            director: "",
            description: "",
            genre: "",
            image: "",
            production: ""
        }
    };
    const [formData, setFormData] = useState(formValues);

    //to handle Form Values 
    const handleChange = (e) => {
        let error = { ...formData.error };
        if (e.target.value === "") {
            error[e.target.name] = `${e.target.name} is Required`;
        } else {
            error[e.target.name] = "";
        }
        setFormData({ ...formData, [e.target.name]: e.target.value, error });

    };
    //to Haanlde the submission of the Form
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        const addBook = await axios.post("https://movie-search-org.onrender.com/api/movies/post", {
            moviename: String(formData.moviename),
            director: String(formData.director),
            description: String(formData.description),
            genre: String(formData.genre),
            image: String(formData.image),
            production: String(formData.production)
        })
        setFormData(formValues);
    }








    return (
        <>
        <Navbar/>
 <div className="form">
      <form  onSubmit={handleSubmit}>
        <h1>Add Movie details Here</h1>
        <label>Movie Name</label>
        <input onChange={(e) => handleChange(e)} name="moviename" type="text"  value={formData.moviename}/>
        <span style={{ color: "red" }}>{formData.error.moviename}</span>
        <label>Director</label>
        <input onChange={(e) => handleChange(e)} name="director" type="text" value={formData.director} />
        <span style={{ color: "red" }}>{formData.error.director}</span>
        <label>Description</label>
        <input onChange={(e) => handleChange(e)} name="description" type="text" value={formData.description} />
        <span style={{ color: "red" }}>{formData.error.description}</span>
        <label>Genre</label>
        <input onChange={(e) => handleChange(e)} name="genre" type="text" value={formData.genre} />
        <span style={{ color: "red" }}>{formData.error.genre}</span>
        <label>Production</label>
        <input onChange={(e) => handleChange(e)} name="production" type="text" value={formData.production} />
        <span style={{ color: "red" }}>{formData.error.production}</span>
        <label>Image</label>
        <input onChange={(e) => handleChange(e)} name="image" type="text" value={formData.image} />
        <span style={{ color: "red" }}>{formData.error.image}</span>
        <button className="btn" type="submit">ADD Movie</button>
      </form>     


</div>


        </>
    )
}

export default Addmovie
