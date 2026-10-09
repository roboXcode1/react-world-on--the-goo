import React, { use, useState } from "react";
import Country from "../Country";
import './countries.css'



const Countries = ({countriesPromies}) => {

    const [visitesFlags,setvisitedFlags] = useState([])
     const handelVisitedflags = (flag) =>{
        const newVisitedflags = [...visitesFlags,flag]
           setvisitedFlags(newVisitedflags)
     }

   const [visitedCountries,setvisitedCountries] = useState([])
const handelvisitedCountries = (country) =>{
    //   console.log("handel visited contries click " , country)
      const newvisitedCountry = [...visitedCountries,country]
      setvisitedCountries(newvisitedCountry)
}


    const countriesData = use(countriesPromies)
    const countries = countriesData.countries
    
    return (
        <div>
            <h2>IN the Countrien : {countries.length}</h2>
                <h3>total counstry visited: {visitedCountries.length} </h3> 
                   <h3>Total visited flags : {visitesFlags.length} </h3>
                   <div className="visitedFlags">
                       {
                           visitesFlags.map(flags => <img src={flags}></img>)
                       }
                   </div>
                <ol>
                    {
                        visitedCountries.map(country => <li 
                                 key={country.cca3.cca3}
                        >{country.name.common}</li>)
                    }
                </ol> 
              
           <div  className="countries ,pp">
             {
                countries.map(country => <Country key={country.cca3.cca3} country={country} 
                       handelvisitedCountries = {handelvisitedCountries}
                       handelVisitedflags = {handelVisitedflags}
                    ></Country>)
            }
          
           </div>

        </div>
    );
};

export default Countries;