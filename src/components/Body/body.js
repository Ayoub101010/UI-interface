import React from "react";

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
          value="1.3.6"
          style={{ fontWeight: "bold" }}
        />
        <select className="Group">
          <option value="" disabled selected>
            Use an existing Present Group
          </option>
        </select>{" "}
      </div>
    </section>
  );
}

export default Body;
