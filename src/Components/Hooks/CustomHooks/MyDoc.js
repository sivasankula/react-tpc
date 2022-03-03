import React, { useState } from "react";
import useDocTitle from "./useDocTitle";

const MyDoc = () => {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clcked {count}</button>
    </div>
  );
};

export default MyDoc;
