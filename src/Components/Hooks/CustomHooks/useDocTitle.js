import { useEffect } from "react";

const useDocTitle = (count) => {
  useEffect(() => {
    document.title = `Clicked ${count}`;
    return () => {};
  }, [count]);
};

export default useDocTitle;
