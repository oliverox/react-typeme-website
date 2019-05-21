import React, { useState } from 'react';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';
import Menu from './Menu';
import GitHubButton from 'react-github-btn';

import './Menu.css';

const MenuContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const menu = [
    'Features',
    'Usage Examples',
    'Installation',
    'License',
    <GitHubButton
      href="https://github.com/oliverox/react-TypeMe"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star oliverox/react-TypeMe on GitHub"
    >
      Star
    </GitHubButton>
  ];
  const menuItems = menu.map((val, index) => {
    return (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={evt => {
          switch (evt.target.textContent.toLowerCase()) {
            case 'features':
              window.location.href = '/#features';
              break;
            case 'usage examples':
              window.location.href = '/#examples';
              break;
            case 'installation':
              window.location.href = '/#installation';
              break;
            case 'license':
              window.location.href = '/#license';
              break;
            default:
              break;
          }
          handleLinkClick();
        }}
      >
        {val}
      </MenuItem>
    );
  });

  return (
    <React.Fragment>
      <div className="menu-container">
        <MenuButton
          open={menuOpen}
          onClick={() => handleMenuClick()}
          color="#1ca086"
        />
        <div className="menu-logo">
          <img className="logo-sm" src="./logo.png" alt="logo" />
        </div>
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
    </React.Fragment>
  );
};

export default MenuContainer;
