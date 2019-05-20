import React, { useState } from 'react';
import TypeMe, { LineBreak, Delete, Delay } from 'react-typeme';

import './App.css';

const App = () => {
  const [animExample, setAnimExample] = useState('');
  const handleClick = example => setAnimExample(example);
  return (
    <div className="App">
      <section id="overview" className="section">
        <h1>React-TypeMe</h1>
        <p>
          React-TypeMe is a typewriter animation simulator component built to be
          simple and powerful. It was created primarily to learn more about
          React Hooks feature. It is built as a pure React functional component.
        </p>
      </section>

      <section id="features" className="section">
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
      </section>

      <section id="examples" className="section">
        <h2 id="examples">Usage Examples</h2>
        <div className="section-example">
          <h4>A simple string</h4>
          <TypeMe
            typingSpeed={500}
            startAnimation={animExample === '1'}
            className="tm-example"
          >
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
            typingSpeed={400}
            startAnimation={animExample === '2'}
            strings={[
              'These strings are passed',
              <LineBreak />,
              'as an array via props'
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
    'as an array via props'
  ]}
/>`}
            </code>
          </pre>
        </div>

        <div className="section-example">
          <h4>With backspace</h4>
          <TypeMe
            className="tm-example"
            typingSpeed={500}
            deleteSpeed={3000}
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

        <div className="section-example">
          <h4>With a custom delay</h4>
          <TypeMe
            className="tm-example"
            typingSpeed={500}
            startAnimation={animExample === '4'}
            strings={[
              'Hey, hold on a sec...',
              <Delay ms={2000} />,
              ' Thank you for trying my delay feature!'
            ]}
          />
          <span className="play-button" onClick={() => handleClick('4')}>
            run
          </span>
          <pre>
            <code className="language-jsx">
              {`import TypeMe, { Delay } from 'react-typeme';

<TypeMe
  strings={[
    'Hey, hold on a sec...',
    <Delay ms={2000} />,
    ' Thank you for trying my delay feature!'
  ]}
/>`}
            </code>
          </pre>
        </div>
      </section>

      <section id="installation" className="section">
        <h2>Installation</h2>
        1. Install the npm package inside your project.
        <pre style={{ marginBottom: 60 }}>
          <code className="language-shell">
            $ npm install --save react-typeme
          </code>
        </pre>
        2. Import <strong>React-TypeMe</strong> into your bundle.
        <pre>
          <code className="language-jsx">
            {`import React from 'react';
import TypeMe from 'react-typeme';

<TypeMe>Simple string passed as children</TypeMe>`}
          </code>
        </pre>
      </section>

      <section id="license" className="section">
        <h2>License</h2>
        <p>
          Use <strong>React-TypeMe</strong> in personal or open source projects{' '}
          <strong>100% free of charge</strong>. To use it in commercial
          projects, thank you for purchasing a single or multi-project license
          right here.
        </p>
        <div className="license-cta">
          <p className="license-col">
            <span className="license-title">
              Commercial
              <br />
              Single License
            </span>
            <span className="license-price">USD 15</span>
            <span className="license-desc">
              Use <strong>React-TypeMe</strong> in a single commercial project.
              Includes lifetime updates.
            </span>
            <span className="license-button">Buy Single License</span>
          </p>
          <p className="license-col">
            <span className="license-title">
              Commercial
              <br />
              Unlimited License
            </span>
            <span className="license-price">USD 45</span>
            <span className="license-desc">
              Use <strong>React-TypeMe</strong> in unlimited commercial
              projects. Includes lifetime updates.
            </span>
            <span className="license-button">Buy Unlimited License</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
