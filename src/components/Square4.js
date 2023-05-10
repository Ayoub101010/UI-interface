import React, { Component } from "react";

class Square4 extends Component {
  
  render() {
    return (
      <section>
        
          <div className="Square4">
            <div className="rect4">Scheduled Update Time</div>
            <br></br>
           
            <input type="radio"></input>As soon as DVB-SSU recieived<br></br><br></br>
            <input type="radio" ></input> Not before 
            <select className="date">
            <option value="">-- Select a date --</option>
            <option value="29 Apr 2023">29 Apr 2023</option>
            <option value="30 Apr 2023">30 Apr 2023</option>
            </select>
            <br></br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Permitted<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upgrade Hours</p>
            <br></br><br></br>
            <select className="Hrs">
            <option value="">00.00 MEX</option>
            <option >--</option>
            <option >--</option>
            </select>
            <br></br><br></br>
            <select className="Hrs">
            <option value="">00.00 MEX</option>
            <option value="29 Apr 2023">--</option>
            <option value="30 Apr 2023">--</option>
            </select>
           
           
          </div>
        
      </section>
    );
  }
}

export default Square4;