import React, { useState } from "react";
import Navbar from "./navbar";
import countriesAll from "./countriesAll.json";
// import CountryProfile from "./countryprofile";

const Main = () => {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("Select Region");
  const [countryProfile, setCountryProfile] = useState("");
  const [showAllCountries, setShowAllCountries] = useState(true);

  const filterSelect = countriesAll.filter((country) => {
    return country.region === selectVal;
  });

  const filterSearch = filterSelect.filter((country) => {
    return (
      country.name.toLowerCase().includes(inputVal) ||
      country.capital.toLowerCase().includes(inputVal)
    );
  });
  console.log(filterSearch);
  return (
    <div className="main">
      <Navbar
        searchTerm={inputVal}
        search={setInputVal}
        selectRegion={selectVal}
        select={setSelectVal}
      />
      {/* <CountryProfile /> */}
      <ul>
        {filterSearch.map((country) => {
          return (
            <li key={country.name}>
              <img src={country.flag} alt="country flag" />
              <p>{country.name}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Captial: {country.capital}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
