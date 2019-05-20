import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

import './Footer.css';

const Footer = () => (
  <footer className="foot">
    <div>
      <span className="social">
        <a
          className="nodeco"
          href="https://twitter.com/oliveroxenham"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </span>
      <span className="social">
        <a
          className="nodeco"
          href="https://www.facebook.com/oliver.oxenham"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </span>
      <span className="social">
        <a
          className="nodeco"
          href="https://www.linkedin.com/in/oliver-oxenham-a33696/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </span>
    </div>
    <span className="footer-text">Created by Oliver Oxenham</span>
  </footer>
);

export default Footer;