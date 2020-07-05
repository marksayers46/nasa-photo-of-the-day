import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NavBar from "./Components/navBar";
import Img from "./Components/img";
import Information from './Components/information';



function App() {
  const [data, setData] = useState("")
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Qrn4GzQZ7koYniMqKDjwMB6vOf5Q1PbD4I6KGwaV')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <NavBar text={data.title} date={data.date}/>

      <Img img={data.url} />

      <Information info={data.explanation}/>

    </div>
  );
}

export default App;