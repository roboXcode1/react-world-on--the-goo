import React, { useState } from 'react';
import './countries/country.css'
const Country = ({country}) => {
    // console.log(country)
    const [visited ,setvisited]  =useState(false)

    const handelVisited = () =>{
          if(visited){
            setvisited(false)
          }
          else{
            setvisited(true)
          }
    }
   
    return (
        <div className={`country  ${visited  && 'country-visited'} `} >
     
             <img src={country.flags.flags.png} alt="country.flags.flags.alt" />
            <h2>name:{country.name.common}</h2>
            <p>Population:{country.population.population}</p>
            <p>Continent:{country.region.region}</p>
            <p>Area: {country.area.area}{country.area.area > 20000 ? "big country"  : "small country"}</p> 

            <button onClick={handelVisited} >{visited ? "visired" : "not visited"} </button>
        </div>
    );
};

export default Country;