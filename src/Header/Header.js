import React from 'react';
import GitHubButton from 'react-github-btn';

import './Header.css';

const Header = () => (
  <header className="header">
    <ul className="menu">
      <li>
        <a href="#overview" className="nodeco">
          <img className="logo" src="./logo.png" alt="logo" />
        </a>
      </li>
      <li>
        <a href="/#features">Features</a>
      </li>
      <li>
        <a href="/#examples">Usage Examples</a>
      </li>
      <li>
        <a href="/#installation">Installation</a>
      </li>
      <li>
        <a href="/#license">License</a>
      </li>
      <li>
        <GitHubButton
          href="https://github.com/oliverox/react-TypeMe"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star oliverox/react-TypeMe on GitHub"
        >
          Star
        </GitHubButton>
      </li>
    </ul>
  </header>
);

export default Header;