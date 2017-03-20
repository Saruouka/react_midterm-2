import React, {Component, PropTypes} from 'react';

export class MyComponent extends Component 
{
  static propTypes = {
      btnText: PropTypes.string,
      language: PropTypes.string
  }

  state = {
    num1: 0,
    num2: 0,
    total: 0
  }

  MyFunc = (event) =>
  {
      var n1 = this.state.num1;
      var n2 = this.state.num2;
      var result = parseInt(n1)+parseInt(n2);

      this.setState({total: result});
  }

  Changed1 = (event) =>
  {
      this.setState({num1: event.target.value});
  }

  Changed2 = (event) =>
  {
      this.setState({num2: event.target.value});
  }

  render() 
  {
    var renderer = null;
    if(this.props.language == "EN")
    {
      renderer = 
        <div className="row">
          <div className="col-md-6">
            <p>Hello</p>
          </div>
          <div className="col-md-6">
            <p>World</p>
          </div>
        </div>
    }
    else if(this.props.language == "TH")
    {
      renderer = <p>สวัสดี</p>
    }
    return (   
      <div className="test">
        <div className="row">
          <div className="col-md-6">
            <input type="text" onChange={this.Changed1} placeholder="Input 1"/><br/>
            <input type="text" onChange={this.Changed2} placeholder="Input 2"/><br/>
            <button onClick={this.MyFunc}>
              {this.props.btnText}
            </button>
            </div>

            <div className="col-md-6">
              {this.state.num1}<br/>
              {this.state.num2}<br/>
              {this.state.total}<br/>
            </div>
          </div>

          {renderer}
      </div>
    );
  }
}