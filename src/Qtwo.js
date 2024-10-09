import React, { useState } from "react";

function Qtwo() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const reverse1 = () => {
    setNumbers([...numbers].reverse());
  };

  return (
    <div className="list-container">
      <ul className="number-list">
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <button className="reverse-button" onClick={reverse1}>
        Reverse
      </button>
    </div>
  );
}

export default Qtwo;
