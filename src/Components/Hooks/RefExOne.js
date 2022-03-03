import React, { useRef, useEffect } from "react";

function RefExOne() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    return () => {};
  }, []);

  return (
    <div>
      <input placeholder="someValue here" ref={inputRef}></input>
    </div>
  );
}

export default RefExOne;
