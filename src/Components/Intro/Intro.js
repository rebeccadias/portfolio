import React from "react";
import "./Intro.css";
import TypingAnimation from "../../Hooks/Typing";

const Intro = () => {
  return (
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
  );
};

export default Intro;
