import React, { use, useState } from "react";

const Countries = ({ countriesPromise }) => {
  // const [countries,setCountries]=useState([]);
  const countriesData = use(countriesPromise);
  console.log(countriesData);

  return (
    <div>
      <h1>Countries length: {countriesData.length}</h1>
      <h1>HI this is from countries</h1>
    </div>
  );
};

export default Countries;
