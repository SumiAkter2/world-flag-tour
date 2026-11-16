import { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";
const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedflag, setVisitedFlag] = useState([]);

  const countriesData = use(countriesPromise);
  // console.log(countriesData);

  const handleCountVisitedCountry = (country) => {
    console.log("visitd");
    setVisitedCountry([...visitedCountry, country]);
    console.log(visitedCountry);
  };

  const handleVisitedFlag = (flags) => {
    setVisitedFlag([...visitedflag, flags]);
    console.log("visited flags", visitedflag);
  };
  return (
    <div>
      <h1>HI this is from countries</h1>
      <h1>Countries length: {countriesData.length}</h1>
      <h3>Total visited Country:{visitedCountry.length}</h3>
      <h3>Total visited Flag:{visitedflag.length}</h3>
      <ol>
        {visitedCountry.map((country, ind) => (
          <li>
            {" "}
            key={ind} {country.name.common}
          </li>
        ))}
      </ol>
      <div className="flag-img">
        {visitedflag.map((flag, ind) => (
          <img key={ind} src={flag}></img>
        ))}
      </div>

      <div className="country-section">
        {countriesData.map((country) => (
          <Country
            country={country}
            key={country.ccn3.ccn3}
            handleCountVisitedCountry={handleCountVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
