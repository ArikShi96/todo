import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2
    };
  }

  componentDidMount() {
    alert(`You clicked ${this.state.count} times`);
  }

  componentDidUpdate() {
    alert(`You clicked ${this.state.count} times`);
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Demo;
