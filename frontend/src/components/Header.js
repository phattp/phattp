import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between bb b--black-20">
      <a
        className="link white hover-white-70 no-underline flex items-center pa3"
        href="#intro"
      >
        Phatt
      </a>
      <div className="flex-grow pa3 flex items-center">
        <a className="f6 link dib white dim mr3 mr4-ns" href="#about">
          About
        </a>
        <a className="f6 link dib white dim mr3 mr4-ns" href="#projects">
          Projects
        </a>
        <a className="f6 link dib white dim mr3 mr4-ns" href="#contact">
          Contact
        </a>
        <a
          className="f6 dib white bg-animate hover-bg-white-20 hover-white no-underline pv2 ph4 br-pill ba b--white"
          href="#resume"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
