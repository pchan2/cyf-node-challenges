import React from "react";

const Navbar = (props) => {
  const handleSelect = (event) => {
    props.select(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = (event) => {
    props.search(event.target.value.toLowerCase());
  };

  return (
    <div className="search">
      <div className="form">
        <i class="fas fa-search"></i>
        <input
          className="input"
          placeholder="Search for a country"
          onChange={handleSearch}
          value={props.searchTerm}
        />
      </div>
      <div className="form">
        <select
          className="select"
          name="regions"
          id="regions"
          onChange={handleSelect}
        >
          <option className="option" value="Select Region">
            Select Region
          </option>
          <option className="option" value="Africa">
            Africa
          </option>
          <option className="option" value="Americas">
            Americas
          </option>
          <option className="option" value="Asia">
            Asia
          </option>
          <option className="option" value="Europe">
            Europe
          </option>
          <option className="option" value="Oceania">
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
