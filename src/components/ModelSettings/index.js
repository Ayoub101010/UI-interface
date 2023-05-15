import React from "react";

function ModelSettings() {
  return (
    <section>
      <div className="square">
        <div className="rect">Included STB Models</div>
        <br />
        <form action="/action_page.php">
          <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />
            <label className="form-check-label" htmlFor="check1">
              Technicolor DCI
            </label>
          </div>
          <br />
          <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" id="check2" name="option2" value="something" />
            <label className="form-check-label" htmlFor="check2">
              Skyworth MBOX
            </label>
          </div>
          <br />
          <div className="form-check">
            &nbsp;&nbsp;<input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Cisco PDS</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ModelSettings;

