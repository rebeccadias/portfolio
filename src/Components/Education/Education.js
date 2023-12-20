import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div className="education-container">
      <div className="education-block">
        <div className="div-degree1">Master of Science in Computer Science</div>
        <div>
          University of Southern California - Viterbi School of Engineering
        </div>
        <div>Los Angeles, California, US</div>

        <div className="div-dates-gpa">
          <p className="div-dates">
            Dates Attended: August 2023 - May 2025 (Expected)
          </p>
          <p className="div-gpa">GPA: 3.3/4</p>
        </div>
        <div className="div-coursework1">
          CourseWork:
          <ol>
            <li>CSCI 570: Analysis of Algorithms</li>
            <li>CSCI 585: Database Systems</li>
            <li>CSCI 544: Applied Natural Language Processing</li>
            <li>CSCI 571: Web Technologies</li>
          </ol>
        </div>

        <div className="div-clubs">
          Clubs & Extracurriculars:
          <ol>
            <li>USC Annenberg TechOps - Part Time Student Worker</li>
            <li>Society of Women Engineers</li>
            <li>Women in Engineering</li>
          </ol>
        </div>
      </div>
      <div className="education-block">
        <div className="div-degree2">
          Bachelor of Engineering in Computer Engineering
        </div>

        <div>University of Mumbai - St. Francis Institue of Technology</div>
        <div>Mumbai, India</div>
        <div className="div-dates-gpa">
          <p className="div-dates">Dates Attended: August 2018 - May 2022</p>
          <p className="div-gpa">GPA: 4/4</p>
        </div>
        <div className="div-coursework1">
          CourseWork:
          <ol>
            <li>CCSC703: Artificial Intelligence and Soft Computing</li>
            <li>CSDLO7032: Big Data and Analytics</li>
            <li>CSDLO6021: Machine Learning</li>
            <li>CSC405: Operating Systems</li>
            <li>CSC403: Computer Organisation and Architecture</li>
          </ol>
        </div>
        <div className="div-clubs">
          Clubs & Extracurriculars:
          <ol>
            <li>CodeX Student Club</li>
            <li>CodeChef Student Chapter</li>
            <li>SFIT Student Council</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
