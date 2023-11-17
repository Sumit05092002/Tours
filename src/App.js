import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
const App = () => {
  const[tours,setTours]= useState(data);
  const removeTour=(id)=>{
    const newTour=tours.filter( (tour)=>{
      return tour.id!==id
    })
    setTours(newTour);
  }

  const revisit=()=>{
    setTours(data);
  }
  if(tours.length==0){
    return(
      <div className="empty">
        <div className="nothing">
        <h1>No tours left</h1>
        <br />
        <button onClick={revisit}>Revisit</button>
        </div>
      </div>
    )
  }else{

    return (
      <div className="parent">
        <h1 className="heading">
          Plan With Love
        </h1>
        <div className="tours">
          <Tours tours={tours} func={removeTour}></Tours>
        </div>
      </div>
    )
  }
};

export default App;
