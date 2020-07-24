import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Demo() {
  const number = useSelector(state => state.counter.number)
  const dispatch = useDispatch()
  return (
    <div>
      <div>You clicked {number} times</div>
      <button onClick={() => { dispatch({ type: 'COUNTER_INCREMENT', payload: 10 }) }}>Click me to add</button>
      <br />
      <button onClick={() => { dispatch({ type: 'COUNTER_DECREMENT', payload: 5 }) }}>Click me to minus</button>
    </div>
  )
}

export default Demo