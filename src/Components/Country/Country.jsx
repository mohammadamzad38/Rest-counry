import './Country.css'

const Country = ({country}) => {
    console.log(country)
    
    const {name, flags} = country
    return (
        <div className="country">
            <h5>Name:{name?.common} </h5>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;