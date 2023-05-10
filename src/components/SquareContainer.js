import React, { Component } from "react";
import Square1 from './Square1';
import Square2 from './Square2';
import Square3 from './Square3';
import Square4 from './Square4';
import Square5 from './Square5';
import Button from './Button';
import Square6 from './Square6';
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