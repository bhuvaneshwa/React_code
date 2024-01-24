import React, { useState } from "react";
export default function State() {
  const [counter, setCounter] = useState(0);

  // Example function to update the state
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}
