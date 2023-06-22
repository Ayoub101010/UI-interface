import React, { useState } from "react";
import "./PresetGroups.css";

function PresetGroups({ onSavePreset }) {
  const [title, setTitle] = useState("");

  const onChange = (evt) => {
    const value = evt.target.value;
    setTitle(value);
  };

  const onClick = () => {
    console.log("save preset", title);
    onSavePreset(title);
  };

  return (
    <section>
      <div className="square6">
        <div className="rect6">
          Save current config settings as new Preset Group
        </div>
     
        <p>&nbsp;&nbsp;Enter name for saving new Preset Group </p>
        <br></br>
        <input
          type="text"
          className="form-control"
          id="inp2"
          onChange={onChange}
          value={title}
        />{" "}
        <button
          type="button"
          id="Btn"
          className="btn-success"
          onClick={onClick}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default PresetGroups;
