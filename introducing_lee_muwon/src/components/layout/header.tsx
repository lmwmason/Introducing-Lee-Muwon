import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="">👨‍💻 Lee Muwon (happy coding)</a>
      </div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;