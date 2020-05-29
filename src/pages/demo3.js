import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'up':
      state.count += 1;
      return state
    case 'down':
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}

function Demo() {
  const [state, dispatch] = useReducer(reducer, { count: 1 })
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: 'up' })}>+</button>
      <button onClick={() => dispatch({ type: 'down' })}>-</button>
    </div>
  );
}

export default Demo;
