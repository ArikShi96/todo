import React from 'react';
import { connect } from 'react-redux'
import store from '../store'
import { counterMinus } from '../store/action/counterAction.js'

const mapStateToProps = (state) => {
  return state.counter
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickAdd: () => {
      return dispatch({ type: 'COUNTER_INCREMENT', payload: 1 })
    },
    clickMinus: () => {
      return dispatch({ type: 'COUNTER_DECREMENT', payload: 1 })
    }
  }
}

class Demo extends React.Component {

  onCounterMinus = () => {
    store.dispatch(counterMinus(1))
  }

  render() {
    return (
      <div>
        <p>You clicked {this.props.number} times</p>
        <button onClick={this.props.clickAdd}>
          Click me to add
        </button>
        <br />
        <button onClick={this.onCounterMinus}>
          Click me to minus
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
