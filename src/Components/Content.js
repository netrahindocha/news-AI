import React from 'react';
import Search from "../Components/Search";
import "../Styling/Content.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import NewsData from './NewsData';

const Content = () => {
  return (
    <div id="content">
      <Search/>
      <Routes>
        <Route exact path="/" element={<NewsData category="general" key="default" />}/>
        <Route exact path="/business" element={<NewsData category="business" key="business"/>}/>
        <Route exact path="/entertainment" key="entertainment" element={<NewsData category="entertainment" key="entertainment" />}/>
        <Route exact path="/general" element={<NewsData category="general" key="general" />}/>
        <Route exact path="/health" element={<NewsData category="health" key="health" />}/>
        <Route exact path="/science" element={<NewsData category="science" key="science" />} />
        <Route exact path="/sports" element={<NewsData category="sports" key="sports" />} />
        <Route exact path="/technology" element={<NewsData category="technology" key="technology" />} />
    </Routes>
    </div>
  )
}

export default Content