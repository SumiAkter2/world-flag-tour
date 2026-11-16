import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div>
      {/* <h1>Show All the countery Here.</h1> */}
      <h1>Country Name: {country?.name?.common}</h1>
      <h4> official :{country?.name?.official}</h4>
      <p> Capital :{country?.capital?.capital}</p>
      <p> Population :{country?.population?.population}</p>
      <p> Region :{country?.region?.region}</p>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
    </div>
  );
};

export default Country;
