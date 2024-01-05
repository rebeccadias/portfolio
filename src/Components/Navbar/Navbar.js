import React from "react";
import logo from "../../Assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <a href="https://rebeccadias.github.io/portfolio/">Home</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/14zxH9Sy7-QYCn9-j4SrcBEb5jlezatvT/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </li>
          {/* <li>
            <a href="/">Projects</a>
          </li> */}
          {/* <li>
            <a href="/">About</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
