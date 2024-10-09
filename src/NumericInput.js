import React, { useState } from "react";

function NumericInput() {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    let inputValue = event.target.value;

    if (inputValue === "") {
      setValue("");
      setError("");
      return;
    }

    if (isNaN(inputValue)) {
      setError("Please enter a valid number.");
    } else {
      const num = parseInt(inputValue, 10);
      if (num >= 1 && num <= 100) {
        setValue(inputValue);
        setError("");
      } else {
        setError("Please enter a number between 1 and 100.");
      }
    }
  };

  return (
    <div className="list-container">
      <input
        type="text"
        className="numeric-input"
        value={value}
        onChange={handleChange}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default NumericInput;
