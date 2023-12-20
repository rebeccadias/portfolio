import React from "react";
import "./Intro.css";
import TypingAnimation from "../../Hooks/Typing";

const Intro = () => {
  return (
    <div>
      <div className="common-all-divs">
        <div class="div-hello">
          <p>Hello I'm</p>
        </div>
        <div class="div-name">
          <p>Rebecca Dias</p>
        </div>
        <div class="div-title">
          <TypingAnimation />
        </div>
      </div>
      <div className="div-sociallinks">
        {/* Link to LinkedIn profile */}
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
    </div>
  );
};

export default Intro;
