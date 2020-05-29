import React from 'react';

function inheritHOC(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      return <div>
      <div className="title">{this.props.title}</div>
      {super.render()}
      </div>
    }
  }
}

export default inheritHOC;

// 可操作state
// 可以渲染劫持
