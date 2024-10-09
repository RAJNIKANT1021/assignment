import React from "react";
import ReactDOM from "react-dom";
import NumericInput from "./NumericInput";
import Qtwo from "./Qtwo";
import Qthree from "./Qthree";
import "./styles.css";

function App() {
  return (
    <div className="container">
      {" "}
      <div className="question-section">
        <h1>Question 1</h1>
        <h3>
          Create a React component with an input field that accepts only numeric
          values between 1 and 100. If the user enters a number outside this
          range or a non-numeric value, display an error message.
        </h3>
        <NumericInput />
      </div>
      <div className="question-section">
        <h1>Question 2</h1>
        <h3>
          {" "}
          Create a React component that renders a list of numbers [1, 2, 3, 4,
          5] and allows the user to reverse the order of the numbers by clicking
          a button.{" "}
        </h3>
        <Qtwo />
      </div>
      <div className="question-section">
        <h1>Question 3</h1>
        <h3>
          Create a React component that uses useReducer to manage a counter
          state. The counter should have actions for incrementing, decrementing,
          and resetting. Provide buttons to trigger each action.
        </h3>
        <Qthree />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
