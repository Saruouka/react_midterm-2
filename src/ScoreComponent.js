import React, {Component, PropTypes} from 'react';

import {InputComponent} from './InputComponent.js';

export class ScoreComponent extends Component 
{
  static propTypes = {
      partText: PropTypes.string,
      scoreText: PropTypes.parseFloat
  }

  state = {
    
  }

  render() 
  {
    let {showScore} = this.props; 
    return (   
      <div className="test">
          <div className="row">
              <div className="col-md-12 App-headpart test">
                    {this.props.partText}
              </div>
          </div>
          <div className="row App-box">
              <div className="col-md-12 App-content">
              คะแนนที่ได้<br/>
              <h2>{showScore} / 30000 </h2>
              </div>
          </div>
      </div>
    );
  }
}