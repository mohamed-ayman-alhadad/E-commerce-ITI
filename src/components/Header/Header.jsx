import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Contexts/StatesContext";
import Nav from "../Nav/Nav";
import style from "./Header.module.css";

function Header() {
  const { theme, setTheme, isOpen, setIsOpen, language, setLanguage } =
    useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={`${style.header} ${theme === "dark" ? style.headerDark : ""}`}>
      <div className={style.announcement}>
        <span>Find something you&apos;ll love in our latest collection.</span>
        <Link to="/products">Explore the collection</Link>
      </div>
      <div className={style.utilityBar}>
        <button
          type="button"
          className={style.utilityButton}
          onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
        <div className="position-relative">
          <button
            type="button"
            className={style.utilityButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="menu"
          >
            {language} <span aria-hidden="true">⌄</span>
          </button>
          {isOpen && (
            <div className={style.languageMenu} role="menu">
              {["English", "العربية"].map((option) => (
                <button
                  key={option}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setLanguage(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Nav theme={theme} />
    </header>
  );
}

export default Header;
