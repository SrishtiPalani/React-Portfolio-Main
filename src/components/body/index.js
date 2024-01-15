import React from "react";
import "./body.css";
import About from "./about/index";
// import Projects from "./projects/index";
import Skills from "./skills/index";
import Work from "./work/index";


function Body() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
   <section id="teaching">
      <Skills />
    </section> 
  <section id="dei">
      <Work />
    </section>
  </div>
  );
}

export default Body;