import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#projects" >
          About
        </a>
    </div>
    <div className="web-option">
        <a href="#research">
        Research
        </a>
    </div>
    <div className="web-option">
        <a href="#teaching">
        Teaching
        </a>
    </div>
    <div className="web-option">
        <a href="#dei">
        Diversity & Inclusion
        </a>
    </div>
    <div className="web-option">
        <a href={"../../../assets/CV.pdf"} target = "_blank" rel="noopener noreferrer">
        CV
        </a>
    </div>
  </div>;
}

export default Web;