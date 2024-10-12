import { useEffect, useState } from "react";

// Define the return type as a tuple: [current theme, function to toggle the theme]
type UseThemeReturn = [string, () => void];

// Define the `useTheme` hook
const useTheme = (): UseThemeReturn => {
  // State to track the current theme (either "light" or "dark")
  const [theme, setTheme] = useState<string>("light");

  // useEffect runs when the component mounts (empty dependency array means it runs only once)
  useEffect(() => {
    // Check if a theme is stored in the browser's localStorage
    const storedTheme = localStorage.getItem("theme");

    // If a theme is found, set it as the current theme
    if (storedTheme) {
      setTheme(storedTheme);

      // Add or remove the 'dark' class on the root HTML element based on the stored theme
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // Function to toggle the theme between "light" and "dark"
  const toggleTheme = () => {
    // Determine the new theme based on the current theme
    const changeTheme = theme === "light" ? "dark" : "light";

    // Update the state to reflect the new theme
    setTheme(changeTheme);

    // Toggle the 'dark' class on the root HTML element depending on the new theme
    document.documentElement.classList.toggle("dark", changeTheme === "dark");

    // Store the user's theme preference in localStorage for future use
    localStorage.setItem("theme", changeTheme);
  };

  // Return the current theme and the function to toggle it
  return [theme, toggleTheme];
};

// Export the custom hook so it can be used in other parts of the application
export default useTheme;
