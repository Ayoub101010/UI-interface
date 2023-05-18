import React from "react";


function PercentageSettings(props) {
  return (
    <section>
      <div className="square">
        <div className="rect">Percentage of Total Devices</div>
        <br />
        <p>&nbsp;&nbsp;Enter % of total devices to deploy:</p>
        <input type='text'id='inp1'name='coverage'className='form-control'placeholder='Enter your percentage'value={props.coverage}
         onChange={props.onChange}/>
          
        <br />
        <p>&nbsp;&nbsp;Estimated number of devices:</p>
        <p>
          <strong>&nbsp;&nbsp;1364 devices</strong>
        </p>
      </div>
    </section>
  );
}

export default PercentageSettings;

