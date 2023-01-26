import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/business" className="activeCategory">Business</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/general">General</Link>
        <Link to="/health">Health</Link>
        <Link to="/science">Science</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/technology">Technology</Link>
      </div>
      </div>
      </>
  )
}

export default Search