import React, { use } from "react";
import Country from "../Country";
import './countries.css'

const Countries = ({countriesPromies}) => {
    const countriesData = use(countriesPromies)
    const countries = countriesData.countries
    
    return (
        <div>
            <h2>IN the Countrien : {countries.length}</h2>
           <div  className="countries ,pp">
             {
                countries.map(country => <Country key={country.cca3.cca3} country={country} ></Country>)
            }
           </div>

        </div>
    );
};

export default Countries;