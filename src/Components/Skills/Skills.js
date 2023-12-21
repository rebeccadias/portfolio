import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="div-whatIcan">
        <p className="div-p-Skills"> Skills </p>
        <div className="div-skills-overall">
          <div className="skill-category">
            {" "}
            Programming
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>Dart</li>
            </ul>
          </div>
          <div className="skill-category">
            {" "}
            Web Technologies & Frame Works
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React.js</li>
              <li>Angular.js</li>
              <li>Django</li>
              <li>Flutter</li>
              <li>NodeJS</li>
              <li>Flask</li>
            </ul>
          </div>
          <div className="skill-category">
            {" "}
            Databases
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Postgis</li>
            </ul>
          </div>
          <div className="skill-category">
            {" "}
            Libraries/Programs
            <ul>
              <li>Git</li>
              <li>TensorFlow</li>
              <li>Scikit-Learn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
