
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromice }) => {
    const countries = use(countriesPromice);

    return (
        <div className='card' >
            <h1>Trabaling countries : </h1>
            <div className='Countries'>
            {
                countries.map(country => <Country key={country.cca3} country={country} ></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;