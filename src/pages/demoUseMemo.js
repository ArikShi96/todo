import React, { useState, useMemo } from 'react';

function Time() {
  return <p>{Date.now()}</p>;
}

function Demo() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const memoizedChildComponent = useMemo(() => {
    return <Time />;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <div>{memoizedChildComponent}</div>
    </div>
  );
}
export default Demo;
