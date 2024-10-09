import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Qthree() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h1 className="counter-value">{state.count}</h1>
      <div className="buttons-container">
        <button className="btn" onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button className="btn" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>{" "}
         
      </div>
    </div>
  );
}

export default Qthree;
