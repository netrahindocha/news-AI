import React from 'react';
import "../Styling/GetStarted.css";
import Content from './Content';
import Features from './Features';
import SideNav from './SideNav';

const GetStarted = () => {
  return (
    <div id="getStarted">
        
        <SideNav />
        <Content />
        <Features />

    </div>
  )
}

export default GetStarted