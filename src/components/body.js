import React, { Component } from "react";

class Body extends Component {
  
  render() {
    return (
  <section>
        <h2>Phased SSU Rollout</h2>
        <select id="software-version-select" name="software-version">
    <option value="" disabled selected>Choose software version to be deployed</option>
    <option value="version1">Version 1</option>
    <option value="version2">Version 2</option>
    <option value="version3">Version 3</option>
      </select>
      <div className="square-container">
        <div className="square">
        <div className="rect"> Choose Rollout Method </div><br></br>
        <input type="radio"></input> All Devices <br></br><br></br>
        <input type="radio"></input> Specific Geo<br></br><br></br>
        <input type="radio"></input> Specific Devices <br></br><br></br>
        <input type="radio"></input> Population Percentage
        </div>
          <div className="square"><div className="rect">Deployment Parameters</div><br></br>
          <input type="radio"></input> DCI STBs <br></br><br></br>
        <input type="radio"></input> MBOX STBs<br></br><br></br>
        <input type="radio"></input> PDS STBs <br></br><br></br>
          </div>
          <div className="square"><div className="rect">Schedule Start Time To Activate</div><br></br>
          <input type="radio"></input>Now<br></br><br></br>
        <input type="radio"></input> Later 
        <select className="date">
        <option value="">-- Select a date --</option>
        <option value="29 Apr 2023">29 Apr 2023</option>
        <option value="30 Apr 2023">30 Apr 2023</option>
       </select><br></br><br></br>
       <select id="MEX">
        <option value="">02.00 MEX</option>
        <option value="29 Apr 2023">--</option>
        <option value="30 Apr 2023">--</option>
       </select>
        </div>
        
        </div>
        <button className="btn">Apply Policy</button>
        
      </section>
    );
  }
}

export default Body;