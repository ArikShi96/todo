const initialState = { number: 0 }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      return { ...state, number: state.number + action.payload }
    case 'COUNTER_DECREMENT':
      return { ...state, number: state.number - action.payload }
    default:
      return state
  }
}