import { createContext, useState } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isOpen, setIsOpen, language, setLanguage }}>
            {children}
        </ThemeContext.Provider>
    )

}


export default ThemeContext