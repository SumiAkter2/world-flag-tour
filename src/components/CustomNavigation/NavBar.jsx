import React from "react";

const NavBar = () => {
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

      <ul>
        {navigation.map((nav) => (
          <li nav={nav}>{nav.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
