import { use } from "react";
import Country from "../Country/Country";
import "./countries.css";
const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);

  const countriesData = use(countriesPromise);
  console.log(countriesData);

  return (
    <div>
      <h1>HI this is from countries</h1>
      <h1>Countries length: {countriesData.length}</h1>
      <div className="country-section">
        {countriesData.map((country) => (
          <Country country={country} key={country.ccn3.ccn3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
