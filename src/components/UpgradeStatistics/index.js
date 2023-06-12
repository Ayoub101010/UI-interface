import React from "react";
import "./UpgradeStatistics.css";

function UpgradeStatistics({ targetedDeviceNum }) {
  return (
    <section>
      <div className="square5">
        <p>
          &nbsp;&nbsp;Estimated number of devices to receive <br />
          &nbsp;&nbsp;deployment based on all filters applied:
        </p>
        <p>
          <strong>&nbsp;&nbsp;{targetedDeviceNum} devices</strong>
        </p>
      </div>
    </section>
  );
}

export default UpgradeStatistics;
