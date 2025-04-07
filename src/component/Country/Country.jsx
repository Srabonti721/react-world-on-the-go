import React, { useState } from 'react';
import './Country.css';

const Country = ({ country , handleVisitedCountries,handleVisitedFlag }) => {
    const [vidited, setVisited] = useState(false);

    // console.log(handleVisitedCountries);
    // console.log(country.flags);

    const handleVisited = () => {
        // if (vidited === true) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }
        setVisited(!vidited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${vidited && 'country-visited'}`}>
            <h2>name : {country.name.common}</h2>
            <img src={country.flags.png} alt="" />
            <p>independent : {country.independent ? 'free' : 'not free'}</p>
            <p>population : {country.population}</p>
            <button className={vidited?'btn-visited':'btn-not-visited'} onClick={handleVisited}>{vidited ? 'Visited' : 'Not visited'}</button>
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>add visited flag :</button>

        </div>
    );
};

export default Country;