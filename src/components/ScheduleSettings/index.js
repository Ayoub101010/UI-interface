import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "./ScheduleSettings.css";
import moment from "moment";

function ScheduleSettings({ onScheduleChange }) {
  // values :
  //  "immediate" = as soon as DVD-SSU received
  //  "schedule" = Not Before specified date
  const [selectedOption, setSelectedOption] = useState("immediate");
  const [notBeforeDate, setNotBeforeDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState("10:00");
  const [selectedEndTime, setSelectedEndTime] = useState("10:00");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // if As SOON is selected you can't pick a date
    if (selectedOption === "immediate") {
      setIsDisabled(false);
    } else setIsDisabled(true);
    const utcStartTime = moment(selectedStartTime, "HH:mm")
      .utc()
      .format("HH:mm");
    const utcEndTime = moment(selectedEndTime, "HH:mm").utc().format("HH:mm");
    onScheduleChange({
      not_before:
        selectedOption === "immediate"
          ? Math.floor(Date.now() / 1000)
          : Math.floor(notBeforeDate.getTime() / 1000),
      permitted_hours: {
        start: utcStartTime,
        end: utcEndTime,
      },
    });
  };

  const onDateChange = (date) => {
    setNotBeforeDate(date);
    const utcStartTime = moment(selectedStartTime, "HH:mm")
      .utc()
      .format("HH:mm");
    const utcEndTime = moment(selectedEndTime, "HH:mm").utc().format("HH:mm");
    onScheduleChange({
      not_before:
        selectedOption === "immediate"
          ? Math.floor(Date.now() / 1000)
          : Math.floor(date.getTime() / 1000),
      permitted_hours: {
        start: utcStartTime,
        end: utcEndTime,
      },
    });
  };

  const onStartTimeChange = (time) => {
    const utcStartTime = moment(time, "HH:mm").utc().format("HH:mm");
    const utcEndTime = moment(selectedEndTime, "HH:mm").utc().format("HH:mm");

    setSelectedStartTime(time);
    onScheduleChange({
      not_before:
        selectedOption === "immediate"
          ? Math.floor(Date.now() / 1000)
          : Math.floor(notBeforeDate.getTime() / 1000),
      permitted_hours: {
        start: utcStartTime,
        end: utcEndTime,
      },
    });
  };
  const onEndTimeChange = (time) => {
    const utcStartTime = moment(selectedStartTime, "HH:mm")
      .utc()
      .format("HH:mm");
    const utcEndTime = moment(time, "HH:mm").utc().format("HH:mm");

    setSelectedEndTime(time);
    onScheduleChange({
      not_before:
        selectedOption === "immediate"
          ? Math.floor(Date.now() / 1000)
          : Math.floor(notBeforeDate.getTime() / 1000),
      permitted_hours: {
        start: utcStartTime,
        end: utcEndTime,
      },
    });
  };

  return (
    <section>
      <div className="Square4">
        <div className="rect4">Scheduled Update Time</div>
       <br></br>
        <label className="radio-label">
          &nbsp;&nbsp;
          <input
            type="radio"
            className="radio-input"
            name="options"
            value="immediate"
            checked={selectedOption === "immediate"}
            onChange={handleOptionChange}
          />{" "}
          As soon as DVB-SSU received
        </label>
        <br />
        <label className="radio-label">
          &nbsp;&nbsp;
          <input
            type="radio"
            className="radio-input"
            name="schedule"
            value="scheduled"
            checked={selectedOption === "scheduled"}
            onChange={handleOptionChange}
          />{" "}
          Not before{" "}
          <div className="date">
            <DatePicker
              disabled={isDisabled}
              wrapperClassName="datepicker"
              selected={notBeforeDate}
              onChange={onDateChange}
            />
          </div>
        </label>
      </div>
      <section>
        <div className="Square5">
          <p className="PUH">
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Permitted
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upgrade Hours
          </p>
          <br></br>
          <div className="begHrs">
            <TimePicker
              value={selectedStartTime}
              onChange={onStartTimeChange}
              disableClock
              customInput={<button>00:00 UTC</button>}
            />
          </div>
          {} <br />
          <br />
          <div className="endHrs">
            <TimePicker
              value={selectedEndTime}
              onChange={onEndTimeChange}
              disableClock
              customInput={<button>00:00 UTC</button>}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default ScheduleSettings;
