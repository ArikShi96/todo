import React, { useState, useCallback } from 'react';

function Demo() {
  const [count, setCount] = useState(0);
  
  const showCount = useCallback(() => {
    alert(count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={showCount}>show</button>
    </div>
  );
}
export default Demo;
