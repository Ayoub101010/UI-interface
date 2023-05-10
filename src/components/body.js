import React, { Component } from "react";

class Body extends Component {
  
  render() {
    return (
  <section>
        <h2>Phased SSU Rollout</h2>
        <input type="text" id="Dep-Rel" value="Deploying Releas 1.3.6"  style={{ fontWeight: "bold" }}/>

        <select className="Group" >
        <option value="" disabled selected>Use an existing Present Group</option>
        </select>
        
     
        
      </section>
    );
  }
}

export default Body;
