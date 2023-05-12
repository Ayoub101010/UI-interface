import React from "react";

function PresetGroups() {
  return (
    <section>
      <div className="square6">
        <div className="rect6">Save current config settings as new Preset Group</div>
        <p>&nbsp;&nbsp;Enter name for saving new Preset Group  </p><br></br>
        <input type="text" className="form-control" id="inp2" />  <button type="button" id="Btn" className="btn-success">Save</button>
      </div>
    </section>
  );
}

export default PresetGroups;
