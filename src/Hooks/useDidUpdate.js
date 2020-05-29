import { useEffect, useRef } from 'react';

const useDidUpdate = (fn, conditions) => {
  // debugger;
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    // Cleanup effects when fn returns a function
    return fn && fn();
  }, conditions);
};

export default useDidUpdate
