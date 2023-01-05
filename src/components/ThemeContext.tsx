import { createContext, useState } from "react";

type ThemeStr = "dark" | "light";

type ThemeContext = {
    theme: string, 
    setTheme: Function,
}

export const ThemeContext = createContext<ThemeContext>({
    theme: '',
    setTheme: () => {},
});



//export const ThemeContext = createContext<any>(null);

