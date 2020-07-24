import React from 'react';

function proxyHOC(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <div>
      <div className="title">{this.props.title}</div>
      <WrappedComponent {...this.props} />
      </div>
    }
  }
}

export default proxyHOC;
