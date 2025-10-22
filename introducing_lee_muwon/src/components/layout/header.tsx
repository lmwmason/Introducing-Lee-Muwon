import React, { useState, useEffect } from 'react';

import '../../style/header.css'

const Header: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      if (currentScrollY === 0) {
        setScrollDirection('up');
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } 
      else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const headerClass = `header ${scrollDirection === 'down' ? 'hide' : ''}`;

  return (
    <header className={headerClass}>
      <div className="header-logo">
        <a href="">👨‍💻 &lt; Happy Coding /&gt;</a>
      </div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#skills">What I do</a>
        <a href="#rates">Rates of my Skill</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;