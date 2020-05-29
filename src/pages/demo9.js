import React from 'react';
import useBind from '../Hooks/useBind.js';

function Demo(props){
  let value = useBind('');
  let value2 = useBind('');
  return(
  <div>
    <input {...value} />
    <p>当前输入: {value.value}</p>
    <input {...value2} />
    <p>当前输入: {value2.value}</p>  </div>);
}

export default Demo;

