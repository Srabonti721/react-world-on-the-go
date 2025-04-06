import React, { use } from 'react';

const Countries = ({countriesPromice}) => {
    const country = use(countriesPromice);
    console.log(country);
    
    return (
        <div>
            <h1>Trabaling countries : {country.length}</h1>
        </div>
    );
};

export default Countries;