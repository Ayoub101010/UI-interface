import React, { useState } from "react";
import MainPanel from "../MainPanel";
import Body from "../Body/body";
import ReviewUpdates from "../ReviewUpdates";
import "./NavBar.css";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleNavItemClick = (event) => {
    const clickedItem = event.target.getAttribute("href");
    setActiveItem(clickedItem);
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
          <MainPanel />
        </>
      )}

      {activeItem === "#RSU" && <ReviewUpdates />}

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
