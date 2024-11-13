import CountryData from "../CountryData/CountryData";

const CountryDetails = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h5>Counrt Details</h5>
            <hr />
            <CountryData>
                country= {country}
                handleVisitedCountry= {handleVisitedCountry}
                handleVisitedFlags= {handleVisitedFlags}
            </CountryData>
        </div>
    );
};

export default CountryDetails;