import React, { use, useState } from "react";
import Country from "./Country/Country";

const Countries = ({ countriesPromise }) => {
  // const [countries,setCountries]=useState([]);
  const countriesData = use(countriesPromise);
  console.log(countriesData);

  return (
    <div>
      <h1>HI this is from countries</h1>
      <h1>Countries length: {countriesData.length}</h1>
      {countriesData.map((country) => (
        <Country country={country} key={country.ccn3.ccn3}></Country>
      ))}
    </div>
  );
};

export default Countries;
