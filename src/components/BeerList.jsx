import { Link } from 'react-router-dom';
import BeerApi from "../services/BeerClass";
import { useState, useEffect } from "react";


function BeerList() {
    
    const [beers, setBeers] = useState([]);
    // This effect will run only once after the initial render 
    useEffect(() => {
      BeerApi.getAllBeers()
      .then(allBeers=>{
        console.log(allBeers)  
        setBeers(allBeers)
    })
    .catch(err => console.log(err))

    }, []);
  

  return (
    <div className="list">
      <h2>Beer List</h2>

        {beers.map(beer => {
            return (
                <div className="ListBeer">

                <img src={beer.image_url} alt="" width="100px" height="200px"/>
                <Link key={beer._id} className="list-group-item list-group-item-action" to={beer._id}>
                <h2>{beer.name}</h2>
                </Link>
                <p> {beer.tagline} </p><br/>
                <p>Created by: {beer.name}</p>

            
                </div>
            )})
        }

    </div>
  );
}

export default BeerList;