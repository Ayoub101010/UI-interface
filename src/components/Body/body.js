import React from "react";
import "./Body.css";
import { getSoftwareVersion } from "../../services/dataUtils";

function Body() {
  return (
    <section>
      <h2>Phased SSU Rollout</h2>
      <br></br>
      <div style={{ display: "flex" }}>
        <p id="Dep-Rel">Deploying Release :</p>
        <input
          type="text"
          id="Version"
          value={getSoftwareVersion()}
          style={{ fontWeight: "bold" }}
        />
        <select className="Group">
          <option value="" disabled selected>
            Use an existing Preset Group
          </option>
        </select>{" "}
      </div>
    </section>
  );
}

export default Body;
