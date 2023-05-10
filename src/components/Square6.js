import React, { Component } from "react";

class Square6 extends Component {
  
  render() {
    return (
      <section>
        <div className="square6">
        <div className="rect6">Save current config settings as new Preset Group</div>
            <p>&nbsp;&nbsp;Enter name for saving new Preset Group  <br></br></p>
            &nbsp;&nbsp;<input type="text" id="inp2" /> <input type="button" id="btnB" value="Save"/>

        </div>
      </section>
    );
  }
}

export default Square6;