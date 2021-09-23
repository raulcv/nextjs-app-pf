import { useEffect, useState } from "react";

// import styles from "../styles/Header.module.scss";

function useDarkMode() {
  const [theme, setTheme] = useState(typeof window !== "undefined" ? localStorage.theme : "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  console.log(colorTheme+ ' - '+ theme);
  useEffect(() => {
      const root = window.document.documentElement;
      console.log(root.classList);

      root.classList.remove(colorTheme);
      root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;