import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import Media from 'react-media';
import fairyGatesTheme from 'typography-theme-fairy-gates';
import { TypographyStyle, GoogleFont } from 'react-typography';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';

import App from './App/App';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import MenuButton from './Menu/MenuButton';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Success from './Success/Success';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './prism.css';

const typography = new Typography(fairyGatesTheme);
Prism.highlightAll();

const WebApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const menu = ['Features', 'Usage Examples', 'Installation', 'License'];
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
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: 50,
      zIndex: '99',
      opacity: 0.9,
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      width: '100%',
      color: '#1ca086',
      fontFamily: 'Lobster'
    },
    logo: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      filter: menuOpen ? 'blur(2px)' : null,
      transition: 'filter 0.5s ease'
    }
  };
  return (
    <Router>
      <React.Fragment>
        <GoogleFont typography={typography} />
        <TypographyStyle typography={typography} />
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <React.Fragment>
                <div style={styles.container}>
                  <MenuButton
                    open={menuOpen}
                    onClick={() => handleMenuClick()}
                    color="#1ca086"
                  />
                  <div style={styles.logo}>
                    <img className="logo" src="./logo.png" alt="logo" />
                  </div>
                </div>
                <Menu open={menuOpen}>{menuItems}</Menu>
              </React.Fragment>
            ) : (
              <Header />
            )
          }
        </Media>

        <Route path="/" exact component={App} />
        <Route path="/success/" exact component={Success} />
        <Footer />
      </React.Fragment>
    </Router>
  );
};

ReactDOM.render(<WebApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
