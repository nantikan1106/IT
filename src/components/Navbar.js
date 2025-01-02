import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#f5c518",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const logoStyle = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const menuStyle = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    fontSize: "18px",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const activeLinkStyle = {
    backgroundColor: "#333",
    color: "#fef7dc",
  };

  return (
    <nav style={navbarStyle}>
      <NavLink to="/" style={logoStyle}>
        IT Lanna Poly
      </NavLink>
      <div style={menuStyle}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          หน้าแรก
        </NavLink>
        <NavLink
          to="/about-us"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          เกี่ยวกับเรา
        </NavLink>
        <NavLink
          to="/courses"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          หลักสูตร
        </NavLink>
        <NavLink
          to="/activities"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
        </NavLink>
        <NavLink
          to="/contact-us"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          ติดต่อเรา
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
