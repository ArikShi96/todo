import { useState, useCallback } from 'react';

function useBind(init) {
  let [value, setValue] = useState(init);
  let onChange = useCallback(function(event) {
    setValue(event.currentTarget.value);
  }, []);
  return {
    value,
    onChange
  };
}

export default useBind;