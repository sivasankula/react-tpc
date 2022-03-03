import React from "react";
import useCounter from "./useCounter";

const MyCountTwo = () => {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      Count = {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default MyCountTwo;
