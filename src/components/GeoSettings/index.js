import React, { Component } from "react";

class Square3 extends Component {
  render() {
    return (
      <section>
        <div className="square">
          <div className="rect">Included Cities</div>
          <br />
          <div className="square-wrapper">
            <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" id="city1" name="city" />
              <label className="form-check-label square-checkbox" htmlFor="city1">Guadalajara</label>
            </div><br></br>
            <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" id="city2" name="city" />
              <label className="form-check-label square-checkbox" htmlFor="city2">Mexico City</label>
            </div><br></br>
            <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" id="city3" name="city" />
              <label className="form-check-label square-checkbox" htmlFor="city3">Salamanca</label>
            </div><br></br>
            <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" id="city4" name="city" />
              <label className="form-check-label square-checkbox" htmlFor="city4">Torreon</label>
            </div><br></br>
            <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" id="city5" name="city" />
              <label className="form-check-label square-checkbox" htmlFor="city5">Los Mochis</label>
            </div><br></br>
            <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" id="city6" name="city" />
              <label className="form-check-label square-checkbox" htmlFor="city6">Cancun</label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Square3;

