import React, {Component, PropTypes} from 'react';

export class SortComponent extends Component 
{
  static propTypes = {
      partText: PropTypes.string,
  }

  state = {
  }

  render() 
  {

    let {checkPass,checkFaculty,AddLeastPoint} = this.props;

    return (   
      <div className="test">
          <div className="row">
              <div className="col-md-12 App-headpart test">
                    {this.props.partText}
              </div>
          </div>
          <div className="row App-box">
              <div className="col-md-12 App-content">
              <h2>โอกาสติด{checkFaculty} : {checkPass}</h2>
              <br/>
              คะแนนต่ำสุดของ{checkFaculty} คือ {AddLeastPoint}
              </div>
          </div>
      </div>
    );
  }
}