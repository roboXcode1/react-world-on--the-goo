import React, { use } from "react";

const Countries = ({countriesPromies}) => {
    const countriesData = use(countriesPromies)
    const countries = countriesData.countries
    console.log(countries)
    return (
        <div>
            <h2>IN the Countries</h2>

        </div>
    );
};

export default Countries;