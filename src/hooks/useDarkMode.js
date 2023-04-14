import { useEffect, useState } from "react";

function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = window.localStorage.getItem("theme");
        try {
            return JSON.parse(storedTheme) || "light";
        } catch (error) {
            console.error(error);
            return "light";
        }
    });

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === "light" ? "dark" : "light"
        );
    };

    useEffect(() => {
        window.localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    return [theme, toggleTheme];
}

export default useDarkMode;