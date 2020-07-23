import React from 'react';
import useHover from '../Hooks/useHover.js';

function Demo() {
  const { hovered, bind } = useHover();
  return (
    <div>
      <div {...bind}>
        hovered:
        {String(hovered)}
      </div>
    </div>
  );
}

export default Demo;

