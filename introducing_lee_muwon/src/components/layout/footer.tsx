import React, { useEffect, useState } from 'react';

import '../../style/footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} happy coding. All rights reserved. </p>
      <div>
        <a href="https://github.com/lmwmason" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a> | 
        <a href="https://happycoding1.tistory.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Blog</a> | 
        <a href="mailto:lmw.hpc@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">Email</a>
      </div>
    </footer>
  );
};

export default Footer;