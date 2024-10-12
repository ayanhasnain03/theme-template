import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../../hooks/useTheme";

const ThemeTogglerBtn = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div
      className="relative w-16 h-8 flex items-center bg-gray-300 rounded-full cursor-pointer transition duration-300 ease-in-out"
      onClick={toggleTheme}
    >
      <div
        className={`absolute w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-800" />
        )}
      </div>
    </div>
  );
};

export default ThemeTogglerBtn;
