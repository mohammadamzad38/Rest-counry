import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, getVisitedFlags] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedFlags = flags =>{
        const newVisitedFlags = [...visitedFlags, flags]
        getVisitedFlags(newVisitedFlags)
    }

    const handleVisitedCountry = country =>{
        const newVisitedCountrys = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountrys)
    }

    return (
        // Visited Countries
        <div>
            <h3>Countries: {countries.length} </h3>
            <div>
            <h3>Visited Country:{visitedCountry.length} </h3>
            <ul>
                {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            </div>

            {/* Viisited flags */}
            <div className="flag-container">
                {
                    visitedFlags.map(flags => <img src={flags}></img>)
                }
            </div>
            {/* Displayed Countriea */}
            <div className="country-container">
            {
                 
               countries.map(country => <Country handleVisitedFlags={handleVisitedFlags} handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country} ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;