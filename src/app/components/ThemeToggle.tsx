"use client";
import { useTheme } from "./ThemeProvider";


export default function ThemeToggle() {
const { theme, toggle } = useTheme();
return (
<button className="toggle" onClick={toggle} aria-label="Toggle theme">
{theme === "dark" ? "🌙 Dark" : "☀️ Light"}
</button>
);
}