import React, { useState, useEffect } from "react";

const CountryProfile = (props) => {
  const [profile, setProfile] = useState(null);
  const flag = props.flag;

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/all`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <section>
      <article>
        <img src={flag} alt="flag image" />
      </article>
      <article>
        <h2>{profile.name}</h2>
        <ul>
          <li>Native Name: {profile.nativeName}</li>
          <li>Population: {profile.population}</li>
          <li>Region: {profile.region}</li>
          <li>Sub Region: {profile.subregion}</li>
          <li>Capital: {profile.capital}</li>
        </ul>
      </article>
    </section>
  );
};

export default CountryProfile;
