import React from 'react'
import Card from './Card';
export default function Tours(props) {
    const tours=props.tours;
    const removeTour=props.func;
  return (
    <div className="tours">
        {

        tours.map( (tour)=>{
            return <div className="grandParent" key={tour.id}>
                <Card image={tour.image} name={tour.name} description={tour.info} price={tour.price} id={tour.id} removeTour={removeTour}></Card>
            </div>
        })
      }
    </div>
  )
}
