import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import MainPanel from "../MainPanel";
import Body from "../Body/body";
import ReviewUpdates from "../ReviewUpdates";
import "./NavBar.css";
import { initSettings } from "../../services/dataUtils";

function NavBar() {
  const [selectedPage, setSelectedPage] = useState("");

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };
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
            <li
              className={selectedPage === "Phased" ? "selected" : ""}
              onClick={() => handlePageClick("Phased")}
            >
              <Link to="/ux">Phased SSU Rollout</Link>
            </li>
            <li
              className={selectedPage === "ADA" ? "selected" : ""}
              onClick={() => handlePageClick("ADA")}
            >
              <Link to="/ux/ada">ADA Management</Link>
            </li>
            <li
              className={selectedPage === "ADI" ? "selected" : ""}
              onClick={() => handlePageClick("ADI")}
            >
              <Link to="/ux/adi">ADI Management</Link>
            </li>
            <li
              className={selectedPage === "Review" ? "selected" : ""}
              onClick={() => handlePageClick("Review")}
            >
              <Link to="/ux/review">Review Scheduled Updates</Link>
            </li>
            <li
              className={selectedPage === "Log" ? "selected" : ""}
              onClick={() => handlePageClick("Log")}
            >
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
                src={process.env.PUBLIC_URL + "/LogoOREGAN.png"}
                style={{ position: "absolute", top: "3px" }}
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
