export const counterAdd = (number) => (dispatch) => {
  dispatch({ type: 'COUNTER_INCREMENT', payload: number })
}
export const counterMinus = (number) => (dispatch) => {
  dispatch({ type: 'COUNTER_DECREMENT', payload: number })
}