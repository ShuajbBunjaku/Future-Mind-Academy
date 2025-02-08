import { useState } from "react";

function useToggle(bool) {
  const [value, setValue] = useState(bool);

  function toggle() {
    setValue(!value);
  }

  return { value, toggle };
}
export default useToggle;
