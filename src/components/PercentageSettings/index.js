import React, { useState } from "react";
import "./PercentageSettings.css";

function PercentageSettings(props) {
  return (
    <section>
      <div className="square">
        <div className="rect">Percentage of Total Devices</div>
        <br />
        <p>&nbsp;&nbsp;Enter % of total devices to deploy:</p>

        <input
          type="text"
          id="inp1"
          name="coverage"
          className="form-control"
          placeholder="Enter your percentage"
          value={props.coverage}
          onChange={props.onChange}
        />
      </div>
    </section>
  );
}

export default PercentageSettings;
