import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <p>Made with ♥ by Rebecca Dias </p>

        <div className="div-socials">
          <a
            className="First"
            href="https://www.linkedin.com/in/rebecca-dias-b8b2921a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>

          {/* Link to GitHub profile */}
          <a
            className="Second"
            href="https://github.com/rebeccadias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>

          {/* Mailto link for email */}
          <a className="Third" href="mailto:rebeccadias2510@gmail.com">
            <i class="fa-solid fa-inbox"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
