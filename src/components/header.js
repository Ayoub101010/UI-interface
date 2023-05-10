import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          
          <nav>
            <ul>
              <li><a href="#PSR">Phased SSU Rollout</a></li>
              <li><a href="#ADA">ADA Management</a></li>
              <li><a href="#ADI">ADI Management</a></li>
              <li><a href="#RSU">Review Scheduled Updates</a></li>
              <li style={{float: "right", fontFamily: "Bahnschrift", color: "black" , marginTop: "15px"}}>Megacable - Device Control Center</li>
            </ul>
          </nav>
        </header>
        
      </>
    );
  }
}

export default Header;
