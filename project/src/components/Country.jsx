import React from 'react';
import './countries/country.css'
const Country = ({country}) => {
    console.log(country)

    const handelVisited = () =>{
        console.log('i visit ')
    }
   
    return (
        <div className='country' >
     
             <img src={country.flags.flags.png} alt="country.flags.flags.alt" />
            <h2>name:{country.name.common}</h2>
            <p>Population:{country.population.population}</p>
            <p>Continent:{country.region.region}</p>
            <p>Area: {country.area.area}{country.area.area > 20000 ? "big country"  : "small country"}</p> 

            <button onClick={handelVisited} >Not visited</button>
        </div>
    );
};

export default Country;