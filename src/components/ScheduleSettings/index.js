import React, { useState } from "react";
import RadioButtons from "../Radiobutton";

function ScheduleSettings() {
  const [selectedOption, setSelectedOption] = useState("");

  // Handle change event when a radio button is selected
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <section>
      <div className="Square4">
        <div className="rect4">Scheduled Update Time</div>
        <br />
        <label className="radio-label">
          &nbsp;&nbsp;
          <input
            type="radio"
            className="radio-input"
            name="options"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />{" "}
          As soon as DVB-SSU received
        </label>
        <br />
        <br />
        <label className="radio-label">
          &nbsp;&nbsp;
          <input
            type="radio"
            className="radio-input"
            name="options"
            value="option2"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />{" "}
          Not before
          <select className="date">
            <option value="">--Select a date--</option>
            <option value="29 Apr 2023">29 Apr 2023</option>
            <option value="30 Apr 2023">30 Apr 2023</option>
          </select>
        </label>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Permitted
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upgrade Hours
        </p>
        <br />
        <br />
        <select className="Hrs">
          <option value="">00.00 MEX</option>
          <option>--</option>
          <option>--</option>
        </select>
        <br />
        <br />
        <select className="Hrs">
          <option value="">00.00 MEX</option>
          <option value="29 Apr 2023">--</option>
          <option value="30 Apr 2023">--</option>
        </select>
      </div>
    </section>
  );
}

export default ScheduleSettings;
