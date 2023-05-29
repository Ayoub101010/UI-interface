import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "./ScheduleSettings.css";

function ScheduleSettings() {
  // Add Time selector
  const [selectedTime, setSelectedTime] = useState("10:00");

  const [notBeforeDate, setNotBeforeDate] = useState(new Date());
  // Add calendar

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
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />{" "}
          Not before{" "}
          <div className="date">
            <DatePicker
              wrapperClassName="datepicker"
              selected={notBeforeDate}
              onChange={(date) => setNotBeforeDate(date)}
            />
          </div>
        </label>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Permitted
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upgrade Hours
        </p>
        <br></br>
        <br></br>
        <div className="begHrs">
          <TimePicker
            value={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            disableClock
            customInput={<button>00:00 UTC</button>}
          />
        </div>
        {} <br />
        <br />
        <div className="endHrs">
          <TimePicker
            value={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            disableClock
            customInput={<button>00:00 UTC</button>}
          />
        </div>
      </div>
    </section>
  );
}

export default ScheduleSettings;
