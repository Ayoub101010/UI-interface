import React from "react";

function PercentageSettings() {
  return (
    <section>
      <div className="square">
        <div className="rect">Percentage of Total Devices</div>
        <br />
        <p>&nbsp;&nbsp;Enter % of total devices to deploy:</p>
        <input type="text" id="inp1" className="form-control" placeholder="Enter your percentage" />
        <br />
        <p>&nbsp;&nbsp;Estimated number of devices:</p>
        <p>
          <strong>&nbsp;&nbsp;1364 devices</strong>
        </p>
      </div>
    </section>
  );
}

export default PercentageSettings;

