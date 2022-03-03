import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prv) => prv + 1);
  };
  const decrement = () => {
    setCount((prv) => prv - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
