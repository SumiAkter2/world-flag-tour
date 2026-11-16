import { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  // console.log(country);
  const [visited, setVisited] = useState(false);

  const handleCheckVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(visited ? false : true);
    // setVisited(!visited);
    // console.log(visited);
  };
  return (
    <div className={`  country  ${visited && "country-visited"}`}>
      {/* className={`  country  ${visited ? "country-visited" : "country-not-visited"}`}
    > */}
      <h1 className="country-name">Country Name: {country?.name?.common}</h1>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
      <h4 className="country-official-name ">
        official :{country?.name?.official}
      </h4>
      <p> Capital :{country?.capital?.capital}</p>
      <p> Population :{country?.population?.population}</p>
      <p> Region :{country?.region?.region}</p>

      <h4 className="country-small ">
        Area :{country?.area?.area}:
        {country.area.area > 20000 ? "Big Country" : "Small Country"}
      </h4>
      <button onClick={handleCheckVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
