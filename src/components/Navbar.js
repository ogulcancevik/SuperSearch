import React from "react";
import { NavLink } from "react-router-dom";
import { BsMoon } from "react-icons/bs";

const Navbar = () => {
  const ToggleTheme = () => {
    const root = document.documentElement.classList;
    root.toggle("dark");
    if (root.contains("dark")) {
      localStorage.setItem("dark",true)
    }
    else {
      localStorage.removeItem("dark")
    }
  };
  return (
    <nav className="h-20 dark:bg-themeDark-dark bg-themeWhite-white flex justify-around items-center">
      <NavLink
        className="dark:text-themeDark-white text-3xl hover:text-themeDark-purple transition-all lg:text-2xl sm:hidden"
        to="/"
      >
        Super Search
      </NavLink>
      <ul className="flex w-100 text-xl sm:text-base dark:text-themeDark-white justify-around">
        <li className="hover:text-themeDark-purple transition-all">
          <NavLink to="/">Search</NavLink>
        </li>
        <li className="hover:text-themeDark-purple transition-all">
          <NavLink to="/PopularMovies">Popular Movies</NavLink>
        </li>
        <li className="hover:text-themeDark-purple transition-all">
          <NavLink to="PopularSeries">Popular Series</NavLink>
        </li>
      </ul>
      <button
        className="h-12 w-20 rounded-lg flex justify-center items-center dark:text-themeDark-white transition-all"
        id="toggle"
        onClick={ToggleTheme}
      >
        <BsMoon className="text-2xl dark:text-themeDark-yellow transition-all" />
      </button>
    </nav>
  );
};

export default Navbar;
