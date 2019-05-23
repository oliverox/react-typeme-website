import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import Media from 'react-media';
import fairyGatesTheme from 'typography-theme-fairy-gates';
import { TypographyStyle, GoogleFont } from 'react-typography';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';

import App from './App/App';
import Api from './Api/Api';
import Error from './Error/Error';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Success from './Success/Success';
import Checkout from './Checkout/Checkout';
import MenuContainer from './Menu/MenuContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './prism.css';
import './index.css';

const typography = new Typography(fairyGatesTheme);
Prism.highlightAll();

const WebApp = () => {
  return (
    <Router>
      <React.Fragment>
        <GoogleFont typography={typography} />
        <TypographyStyle typography={typography} />
        <Media query="(max-width: 599px)">
          {matches => (matches ? <MenuContainer /> : <Header />)}
        </Media>
        <div className="main-content">
          <Route path="/" exact component={App} />
          <Route path="/api" exact component={Api} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/success" exact component={Success} />
          <Route path="/error" exact component={Error} />
        </div>
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
