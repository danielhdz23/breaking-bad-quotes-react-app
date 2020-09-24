import React, { useState } from "react";

const Counter = ({ color = "danger" }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <>
      <h1>My Counter: {counter}</h1>
      <hr />
      <div className="d-flex justify-content-between">
        <button onClick={handleDecrement} className={`btn btn-warning btn-lg`}>
          -1
        </button>
        <button onClick={handleReset} className={`btn btn-danger btn-lg`}>
          Reset
        </button>
        <button onClick={handleIncrement} className={`btn btn-${color} btn-lg`}>
          +1
        </button>
      </div>
    </>
  );
};

export default Counter;
