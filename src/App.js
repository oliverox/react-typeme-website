import React, { useState } from 'react';
import Typography from 'typography';
import { TypographyStyle, GoogleFont } from 'react-typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import TypeMe, { LineBreak, Delete } from 'react-typeme';

import './prism.css';
import './App.css';

const typography = new Typography(fairyGatesTheme);
Prism.highlightAll();

const App = () => {
  const [animExample, setAnimExample] = useState('');
  const handleClick = example => setAnimExample(example);
  return (
    <React.Fragment>
      <GoogleFont typography={typography} />
      <TypographyStyle typography={typography} />
      <div className="App">
        <header className="App-header">...menu...</header>
        <h1>React-TypeMe</h1>
        <p>
          TypeMe is a typewriting simulator React component built to be simple
          and powerful. It was created primarily to learn about React Hooks. It
          is built as a pure React functional component.
        </p>
        <h2>Features</h2>
        <ul className="feature-list">
          <li>
            <span role="img" aria-label="feature">
              ✔️ Extremely lightweight (less than 2KB gzipped including
              styling).
            </span>
          </li>
          <li>
            <span role="img" aria-label="feature">
              ✔️ Loop typing animation.
            </span>
          </li>
          <li>
            <span role="img" aria-label="feature">
              ✔️ Add custom line breaks.
            </span>
          </li>
          <li>
            <span role="img" aria-label="feature">
              ✔️ Simulate backspace character key.
            </span>
          </li>
          <li>
            <span role="img" aria-label="feature">
              ✔️ Control typing and delete speeds.
            </span>
          </li>
          <li>
            <span role="img" aria-label="feature">
              ✔️ Use custom cursor character.
            </span>
          </li>
          <li>
            <span role="img" aria-label="feature">
              ✔️ Introduce artificial typing delays.
            </span>
          </li>
          <li>
            <span role="img" aria-label="feature">
              ✔️ Control start of typing animation.
            </span>
          </li>
          <li>
            <span role="img" aria-label="feature">
              ✔️ Built for React &mdash; No external dependencies.
            </span>
          </li>
        </ul>
        <h2>Demo</h2>

        <div className="section-example">
          <h4>A simple string</h4>
          <TypeMe startAnimation={animExample === '1'} className="tm-example">
            Simple string passed as children
          </TypeMe>
          <span className="play-button" onClick={() => handleClick('1')}>
            run
          </span>
          <pre>
            <code className="language-jsx">
              {`import TypeMe from 'react-typeme';

<TypeMe>Simple string passed as children</TypeMe>`}
            </code>
          </pre>
        </div>

        <div className="section-example">
          <h4>With a line break</h4>
          <TypeMe
            className="tm-example"
            startAnimation={animExample === '2'}
            strings={[
              'These strings are passed',
              <LineBreak />,
              'as an array via the "strings" prop'
            ]}
          />
          <span className="play-button" onClick={() => handleClick('2')}>
            run
          </span>
          <pre>
            <code className="language-jsx">
              {`import TypeMe, { LineBreak } from 'react-typeme';

<TypeMe
  strings={[
    'These strings are passed',
    <LineBreak />,
    'as an array via the "strings" prop'
  ]}
/>`}
            </code>
          </pre>
        </div>


        <div className="section-example">
          <h4>With backspace</h4>
          <TypeMe
            className="tm-example"
            startAnimation={animExample === '3'}
            strings={[
              'Hello there. ',
              'Can you please erase this sentence?',
              <Delete characters={35} />,
              'Thank you!'
            ]}
          />
          <span className="play-button" onClick={() => handleClick('3')}>
            run
          </span>
          <pre>
            <code className="language-jsx">
              {`import TypeMe, { Delete } from 'react-typeme';

<TypeMe
  strings={[
    'Hello there.',
    'Can you please erase this sentence?',
    <Delete characters={35} />,
    'Thank you!'
  ]}
/>`}
            </code>
          </pre>
        </div>        
      </div>
    </React.Fragment>
  );
};

export default App;
