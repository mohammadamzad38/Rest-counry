import { useState } from 'react';
import './Country.css'
import CountryDetails from '../../assets/Countrydetails/CountryDetails';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country)
    
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false)

    const handelVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'white' : 'black'}}>Name:{name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population:{population} </p>
            <p>Area:{area} </p>
            <p><small>Code:{cca3} </small></p>
            {visited? 'I have visited' : 'I want to visite'}
            <br />
            <button onClick={() => {handleVisitedFlags(country.flags.png)}}>Add Flag</button>
            <br />
            <button onClick={handelVisited}>{visited? 'Visited' : 'Going'}</button>
            <br />
            <button onClick={() => handleVisitedCountry(country) }>Mark Visited</button>
            <br />
            <CountryDetails>
                country = {country}
                handleVisitedCountry= {handleVisitedCountry}
                handleVisitedFlags= {handleVisitedFlags}
            </CountryDetails>
        </div>
    );
};

export default Country;