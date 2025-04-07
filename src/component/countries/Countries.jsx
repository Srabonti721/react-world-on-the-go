
import { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromice }) => {
    const [VisitedCountries,setVisitedCountries]=useState([]);
    const [visitedFlags , setVisitedFlags]  = useState([]);

    const countries = use(countriesPromice);
    const handleVisitedFlag = (flag) =>{
      const newVisitedFlags = [...visitedFlags ,flag];
      setVisitedFlags(newVisitedFlags)
        
    }

  const handleVisitedCountries = (country) =>{
    console.log('country visited click to be added',country);
    const newVisitedCountries = [...VisitedCountries,country]
setVisitedCountries(newVisitedCountries);
    
    
  } 

    return (
        <div className='card' >
            <h1> My Traveling countries : {countries.length}</h1>
            <h3>Traveled so far : {VisitedCountries.length}</h3>
            <div className='flags-img-container' >
                {
                    visitedFlags.map((flag,index) => <img key={index} src ={flag}></img>)
                }
            </div>
            <ol>
                {
                    VisitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='Countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedFlag ={handleVisitedFlag}
                    handleVisitedCountries= {handleVisitedCountries}
                    country={country} ></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;