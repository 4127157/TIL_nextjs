import { createContext, useState } from "react";

type ThemeStr = "dark" | "light";

type ThemeContext = {
    theme: ThemeStr, 
    setTheme: Function,
}

export const ThemeContext = createContext<ThemeContext>({
    theme: 'dark',
    setTheme: () => {},
});



//export const ThemeContext = createContext<any>(null);

