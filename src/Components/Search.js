import React from 'react';
import "../Styling/Search.css";

const Search = () => {
  return (
    <div id="search">
      <div className="justifyBetween alignCenter">
        <div className="searchBtn flexRow">
          <input type="searchHidden" name="searchHidden" id="searchHidden" placeholder="Search article you want" />
          <i className="fa fa-search searchIcon"></i>
        </div>
        <div className="actions">
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-bookmark"></i>
        </div>
      </div>
      </div>
  )
}

export default Search