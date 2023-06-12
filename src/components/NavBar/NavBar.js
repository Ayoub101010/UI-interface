import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import MainPanel from "../MainPanel";
import Body from "../Body/body";
import ReviewUpdates from "../ReviewUpdates";
import "./NavBar.css";
import { initSettings } from "../../services/dataUtils";

function NavBar() {
  useEffect(() => {
    const init = async () => {
      await initSettings();
    };
    init();
  }, []);
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
                position: "relative",
                marginLeft: "1200px",
                marginTop: "-66px",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/LOGOr.png"}
                style={{ position: "absolute", top: "15px" }}
              />
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
