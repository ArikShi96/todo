import React from 'react';
import bindHoc from '../HOC/bindHOC.js'

class Demo extends React.Component {
  render() {
    return(
    <div>
      <p>当前输入: {this.props.value}</p>
      <input {...this.props}></input>
    </div>);
  }
}

export default bindHoc(Demo);
