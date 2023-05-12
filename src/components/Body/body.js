import React from "react";

function Body() {
  return (
    <section>
      <h2>Phased SSU Rollout</h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        id="Dep-Rel"
        value="Deploying Release 1.3.6"
        style={{ fontWeight: "bold" }}
      />

      <select className="Group">
        <option value="" disabled selected>
          Use an existing Present Group
        </option>
      </select>
    </section>
  );
}

export default Body;

