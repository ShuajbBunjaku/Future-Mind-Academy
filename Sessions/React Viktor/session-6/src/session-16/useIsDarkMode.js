import { useState } from "react";

function useIsDarkMode(initialTheme) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || initialTheme);

  function setToggle() {
    localStorage.setItem("theme", theme);

    setTheme((theme) => !theme);
  }

  return { theme, setToggle };
}

export default useIsDarkMode;
