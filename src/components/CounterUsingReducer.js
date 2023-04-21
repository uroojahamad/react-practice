import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count === 0 ? 0 : state.count - 1};
        case 'reset':
            return {count: 0};
        default:
            return state.count
    }
}

const CounterUsingReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment =() => {
      dispatch({ type: 'increment' });
    }
  
    const decrement =() => {
      dispatch({ type: 'decrement' });
    }

    const reset =() => {
        dispatch({ type: 'reset' });
      }

  return (
    <div>
        <h1>Counter : {state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterUsingReducer