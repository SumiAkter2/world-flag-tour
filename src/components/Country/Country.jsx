import "./country.css";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="country">
      <h1 className="country-name">Country Name: {country?.name?.common}</h1>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
      <h4 className="country-official-name ">
        {" "}
        official :{country?.name?.official}
      </h4>
      <p> Capital :{country?.capital?.capital}</p>
      <p> Population :{country?.population?.population}</p>
      <p> Region :{country?.region?.region}</p>
    </div>
  );
};

export default Country;
