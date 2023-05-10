import React from "react";
import { Routes,Route } from "react-router-dom";
import Addmovie from "./components/addmovie.js";
import Movie from "./components/movie.js";
import Home from "./routes/home.js"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/addmovie" element={<Addmovie/>}/>
      <Route path="/movies" element={<Movie/>}/>
    </Routes>
 
    </>
     
  
   
  );
}

export default App;
