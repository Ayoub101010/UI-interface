import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ScheduleSettings() {
  // Add calendar
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
          Not before{" "}
          <div>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              showPopperArrow={false}
              customInput={<button className="date">select a date</button>}
            />
          </div>
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
