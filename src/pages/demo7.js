import React, { useState } from 'react';
import useDidUpdate from '../Hooks/useDidUpdate.js'

function Demo() {
  const [count, setCount] = useState(0);

  // 类似于componentDidMount 和 componentDidUpdate:
  useDidUpdate(() => {
    // 更新文档的标题
    alert(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Demo;
