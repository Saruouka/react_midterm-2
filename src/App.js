import React, {Component} from 'react';
import './App.css';
import './bootstrap.css';
import { MyComponent } from './myComponent.js';
import {InputComponent} from './InputComponent.js';


class App extends Component {

  render()
  {
    return (
      <div className="App">
        {/*HEADER*/}
        <div className="App-header App-intro Text-header">
          <p>Admission Calculator</p>
        </div>
        {/*BODY*/}
        {/*PART1 INPUT SCORE*/}
          <InputComponent partText="ส่วนที่1 - ป้อนคะแนนของคุณ"/>
        {/*PART2 SHOW SCORE*/}

      </div>
    );
  }
}

export default App;
