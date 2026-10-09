import React, { useState } from 'react';
import './countries/country.css'
const Country = ({country ,handelvisitedCountries ,handelVisitedflags}) => {
    // console.log(handelvisitedCountries)
    // console.log(country) 

     
    const [visited ,setvisited]  =useState(false)

    const handelVisited = () =>{
          if(visited){
            setvisited(false)
          }
          else{
            setvisited(true)
          }
           
          handelvisitedCountries(country) ;
         
    }
    //  setvisited(visited ?  false : true) 
   
    return (
        <div className={`country  ${visited  && 'country-visited'} `} >
        
     
             <img src={country.flags.flags.png} alt="country.flags.flags.alt" />
            <h2>name:{country.name.common}</h2>
            <p>Population:{country.population.population}</p>
            <p>Continent:{country.region.region}</p>
            <p>Area: {country.area.area}{country.area.area > 20000 ? "big country"  : "small country"}</p> 

            <button onClick={handelVisited} >{visited ? "visired" : "not visited"} </button>
            <button onClick={()=>{handelVisitedflags(country.flags.flags.png)}}>Add visited flag</button>
        </div>
    );
};

export default Country;