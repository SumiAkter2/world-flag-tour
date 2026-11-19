import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigation = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <div>
      <h1>THis is from navigation</h1>
      <h2 onClick={() => setOpen(!open)}>{open ? "open" : "close"}</h2>

      <ul>
        {navigation.map((nav) => (
          <li>
            <a href={nav?.url}>{nav.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
