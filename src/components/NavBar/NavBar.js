import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import MainPanel from "../MainPanel";
import Body from "../Body/body";
import ReviewUpdates from "../ReviewUpdates";
import "./NavBar.css";

function NavBar({ onDelete }) {
  const handleDelete = () => {};

  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/ux">Phased SSU Rollout</Link>
            </li>
            <li>
              <Link to="/ux/ada">ADA Management</Link>
            </li>
            <li>
              <Link to="/ux/adi">ADI Management</Link>
            </li>
            <li>
              <Link to="/ux/review">Review Scheduled Updates</Link>
            </li>
            <li>
              <Link to="/ux/history">Log History</Link>
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

      <Routes>
        <Route
          path="/ux"
          element={
            <React.Fragment>
              <Body />
              <MainPanel />
            </React.Fragment>
          }
        />
        <Route
          path="/ux/review"
          element={
            <React.Fragment>
              <ReviewUpdates />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
