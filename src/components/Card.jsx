import React from 'react'
import { useState } from 'react';
export default function Card(props) {
  const info=props.description.substring(0,100);
  const[readmore,setReadmore]=useState(false);
  const handleReadmore=()=>{
    setReadmore(true);
  }

  const handleShowless=()=>{
    setReadmore(false);
  }
  return (
    <div className="mycard">

      <img src={props.image} alt="" srcset="" />
      <br />
      <div className="title">
        <p>{props.name}</p>
      </div>
      <div className="description" >
        {
          readmore?(<p onClick={handleShowless}>{props.description}... <span className='showless'>Showless</span> </p>):(<p onClick={handleReadmore}>{info}... <span className='showless'>Readmore</span></p>)
        }
      </div>
      <div className="price">
        <p>Rs{props.price}</p>
      </div>
      <div className="button">
        <button className="removetour" onClick={()=>{props.removeTour(props.id)}}>Remove Tour</button>
      </div>
    </div>
    
  )
}
