import React, { useState } from "react";
import useTypingEffect from "../Hooks/useTypingEffect";
import "./Typing.css";

const Typing = () => {
  const words = [
    "Software Developer",
    "Full Stack Developer",
    "UI/UX Designer & App Developer",
  ];
  const typing = useTypingEffect(words, 2000);
  const [isDeleting, setIsDeleting] = useState(false);

  // Assuming useTypingEffect calls setIsDeleting(true) when backspacing starts
  // and setIsDeleting(false) when a new word starts typing
  // You'll need to adjust useTypingEffect to use this setter appropriately

  return (
    <div className="typing">
      <h2>
        {typing}
        <span className={`cursor ${isDeleting ? "cursor--hidden" : ""}`}></span>
      </h2>
    </div>
  );
};

export default Typing;
