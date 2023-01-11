import React from 'react';
import Search from "../Components/Search";
import NewsData from "../Components/NewsData";
import "../Styling/Content.css";

const Content = () => {
  return (
    <div id="content">
      <Search />
      <NewsData />
    </div>
  )
}

export default Content