import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";

import "./App.css";

function App() {
  return (
    <div>
      <div class="main_container">
        <Navbar />
        <Intro />
      </div>
      <div className="proj_container">
        <div>
          <div className="content">Education</div>
          <Education />
        </div>
      </div>

      <div className="div-skills">
        <Skills />
      </div>
    </div>
  );
}

export default App;
