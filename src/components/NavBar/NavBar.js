import React, { useState } from "react";
import MainPanel from "../MainPanel";
import Body from "../Body/body";
import ReviewUpdates from "../ReviewUpdates";
import "./NavBar.css";

function NavBar({ onDelete }) {
  const [activeItem, setActiveItem] = useState(null);
  const [properties, setProperties] = useState([]);

  const handleNavItemClick = (event) => {
    const clickedItem = event.target.getAttribute("href");
    setActiveItem(clickedItem);
  };

  const handlePropertyAdd = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
  };
  const handleDelete = (index) => {
    setProperties((prevProperties) => {
      const updatedProperties = [...prevProperties];
      updatedProperties.splice(index, 1);
      return updatedProperties;
    });
  };
  
  

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#PSR" onClick={handleNavItemClick}>
                Phased SSU Rollout
              </a>
            </li>
            <li>
              <a href="#ADA">ADA Management</a>
            </li>
            <li>
              <a href="#ADI">ADI Management</a>
            </li>
            <li>
              <a href="#RSU" onClick={handleNavItemClick}>
                Review Scheduled Updates
              </a>
            </li>
            <li>
              <a href="#RSU">Log History</a>
            </li>

            <li
              style={{
                float: "right",
                fontFamily: "Bahnschrift",
                color: "black",
                marginTop: "15px",
              }}
            >
              Megacable - Device Control Center
            </li>
          </ul>
        </nav>
      </header>

      {activeItem === "#PSR" && (
        <>
          <Body />
          <MainPanel onPropertyAdd={handlePropertyAdd} />
        </>
      )}

      {activeItem === "#RSU" && (
        <ReviewUpdates properties={properties} onDelete={handleDelete} />
      )}

      {activeItem !== "#PSR" && activeItem !== "#RSU" && (
        <div>
          <Body />
          <MainPanel />
        </div>
      )}
    </>
  );
}

export default NavBar;
