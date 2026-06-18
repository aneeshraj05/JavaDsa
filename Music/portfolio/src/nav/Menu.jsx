import "./menu.css";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [hovered, setHovered] = useState("");

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Connect", path: "/connect" },
  ];

  return (
    <nav className="menu">
      {menuItems.map((item) => (
        <div
          key={item.name}
          className="menu-item"
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered("")}
        >
          <RoughNotation
            type="circle"
            show={hovered === item.name}
            color="#716e6e"
            strokeWidth={0.6}
            animationDuration={300}
            padding={5}
          >
            <Link to={item.path} className="menu-link">
              {item.name}
            </Link>
          </RoughNotation>
        </div>
      ))}
    </nav>
  );
}