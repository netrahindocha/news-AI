import React from 'react';
import "../Styling/Search.css";

const Search = () => {
  return (
    <>
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
      <div className="newsCategory">
        <a href="/business" className="activeCategory">Business</a>
        <a href="/entertainment">Entertainment</a>
        <a href="/general">General</a>
        <a href="/health">Health</a>
        <a href="/science">Science</a>
        <a href="/sports">Sports</a>
        <a href="/technology">Technology</a>
      </div>
      </div>
      </>
  )
}

export default Search