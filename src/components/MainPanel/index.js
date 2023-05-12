import React, { Component } from "react";
import Square1 from '../PercentageSettings/index';
import Square2 from '../ModelSettings/index';
import Square3 from '../GeoSettings/index';
import Square4 from '../ScheduleSettings/index';
import Square5 from '../UpgradeStatistics/index';
import Button from '../Buttons/Button';
import Square6 from '../PresetGroups/index';
class SquareContainer extends Component {
    render() {
      return (
        <section>
          <div className="square-container">
        
            <Square1 />
            <Square2 />
            <Square3/>
            <Square4/>
            <Square5/>
            <Button/>
            <Square6/>
          
         
          </div>
        </section>
      );
    }
  }
  
  export default SquareContainer;