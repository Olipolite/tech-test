import React, { useState } from "react";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";
import "../styles/search.css";

function Search({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
           className="search-input"
           type="text"
           onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" type="submit">
         Search
        </button>
      </form>
    </>
  );  
};

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
