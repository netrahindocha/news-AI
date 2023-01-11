import React from 'react';
import "../Styling/SideNav.css";

const SideNav = () => {
    return (
        <div id="sideNav">

            <div>
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

            <div className="bottomPart">
                <div className="settings">
                    <i className="fa-solid fa-gear"></i>
                </div>
                <div className="logout">
                    <i className="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>

        </div>
    )
}

export default SideNav