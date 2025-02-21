import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between items-center border border-neutral-300 max-w-7xl">
      <h1>My Notes</h1>
      <ul className="flex flex-row gap-x-5">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link to={"/"}>Add to Do's</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
