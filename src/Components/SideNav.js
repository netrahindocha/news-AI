import React from 'react';
import "../Styling/SideNav.css";

const SideNav = () => {
    return (
        <div id="sideNav">

            <div id="logo">
                <i class="fa-solid fa-robot"></i>
                <p id='title'>NewsAI</p>
            </div>

            <div className="navList">
                <a href="">Home</a>
                <a href="" className='active'>Features</a>
                <a href="">User Guide</a>
            </div>

        </div>
    )
}

export default SideNav