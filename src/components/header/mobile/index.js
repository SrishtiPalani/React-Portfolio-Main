import React from "react";
import './mobile.css'
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="mobile-option">
        <a href="#projects" >
          About
        </a>
    </div>
    <div className="mobile-option">
        <a href="#research">
        Research
        </a>
    </div>
    <div className="mobile-option">
        <a href="#teaching">
        Teaching
        </a>
    </div>
    <div className="mobile-option">
        <a href="#dei">
        Diversity & Inclusion
        </a>
    </div>
    <div className="mobile-option">
        <a href={"../../../assets/CV.pdf"} target = "_blank" rel="noreferrer">
        CV
        </a>
    </div>
  </div>
  );
}

export default Mobile;