import React from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country.flags);
    
    return (
        <div className='common'>
            <h2>name : {country.name.common}</h2>
            <img src={country.flags.png} alt="" />
            <p>independent : {country.independent? 'free':'not free'}</p>
            <p>population : {country.population}</p>
          
        </div>
    );
};

export default Country;