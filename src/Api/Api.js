import React from 'react';
import Prism from 'prismjs';

import './Api.css';

const Api = () => {
  Prism.highlightAll();
  return (
    <div className="App">
      <section style={{ paddingBottom: 100 }}>
        <h1>API Documentation</h1>
        <h2>TypeMe</h2>
        <p>
          <code>&lt;TypeMe/&gt;</code> renders a string enclosed within a{' '}
          <code>&lt;span/&gt;</code> element. Below is a list props read by{' '}
          <code>&lt;TypeMe/&gt;</code>.
        </p>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td className="desc-follow">
                <code>children</code>
              </td>
              <td className="desc-follow">String or Array</td>
            </tr>
            <tr className="odd">
              <td colSpan={3}>
                <span className="desc">
                  The easiest way to type a string. Pass your string as a
                  children prop. For more advanced typing effects, use the{' '}
                  <code>strings</code> prop instead.
                </span>
              </td>
            </tr>

            <tr>
              <td className="desc-follow">
                <code>className</code>
              </td>
              <td className="desc-follow">String</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span className="desc">
                  The class used to custom style your typed string.
                </span>
              </td>
            </tr>

            <tr className="odd">
              <td className="desc-follow">
                <code>strings</code>
              </td>
              <td className="desc-follow">String or Array</td>
            </tr>
            <tr className="odd">
              <td colSpan={3}>
                <span className="desc">
                  A list of strings or helper components to type (see more
                  information about helper components below).
                </span>
              </td>
            </tr>

            <tr>
              <td className="desc-follow">
                <code>startAnimation</code>
              </td>
              <td className="desc-follow">Boolean</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span className="desc">
                  Controls the start of the typing animation. Defaults to{' '}
                  <code>True</code>.
                </span>
              </td>
            </tr>

            <tr className="odd">
              <td className="desc-follow">
                <code>hideCursor</code>
              </td>
              <td className="desc-follow">Boolean</td>
            </tr>
            <tr className="odd">
              <td colSpan={3}>
                <span className="desc">
                  Immediately hides the cursor after the typing animation is
                  over. Defaults to <code>False</code>.
                </span>
              </td>
            </tr>

            <tr>
              <td className="desc-follow">
                <code>typingSpeed</code>
              </td>
              <td className="desc-follow">Number</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span className="desc">
                  Controls the animation typing speed in words per minute.
                  Average human typing speed is 240 words per minute. Defaults
                  to <code>500</code>.
                </span>
              </td>
            </tr>

            <tr className="odd">
              <td className="desc-follow">
                <code>deleteSpeed</code>
              </td>
              <td className="desc-follow">Number</td>
            </tr>
            <tr className="odd">
              <td colSpan={3}>
                <span className="desc">
                  Controls the backspace character speed in words per minute.
                  Defaults to <code>800</code>.
                </span>
              </td>
            </tr>

            <tr>
              <td className="desc-follow">
                <code>backspaceDelay</code>
              </td>
              <td className="desc-follow">Number</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span className="desc">
                  Adds a delay in milliseconds before backspacing characters.
                  Defaults to <code>500</code>.
                </span>
              </td>
            </tr>

            <tr className="odd">
              <td className="desc-follow">
                <code>loop</code>
              </td>
              <td className="desc-follow">Boolean</td>
            </tr>
            <tr className="odd">
              <td colSpan={3}>
                <span className="desc">
                  Loops the typing animation infinitely. Defaults to{' '}
                  <code>False</code>.
                </span>
              </td>
            </tr>

            <tr>
              <td className="desc-follow">
                <code>cursorCharacter</code>
              </td>
              <td className="desc-follow">String</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span className="desc">
                  Uses a custom character as cursor. Defaults to <code>|</code>.
                </span>
              </td>
            </tr>

            <tr className="odd">
              <td className="desc-follow">
                <code>cursorBlinkSpeed</code>
              </td>
              <td className="desc-follow">Number</td>
            </tr>
            <tr className="odd">
              <td colSpan={3}>
                <span className="desc">
                  Controls the cursor blinking speed in milliseconds. Defaults
                  to <code>800</code>.
                </span>
              </td>
            </tr>

            <tr>
              <td className="desc-follow">
                <code>onAnimationEnd</code>
              </td>
              <td className="desc-follow">Function</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span className="desc">
                  Calls this function after typing animation ends.
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Helper components</h2>
        <h3>LineBreak</h3>
        <p>
          <code>&lt;LineBreak/&gt;</code> is a helper component which renders a
          line break element to force the following string onto a new line.
        </p>
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

        <h3>Delay</h3>
        <p>
          <code>&lt;Delay/&gt;</code> is a helper component which pauses the
          typing animation for a defined amount of time.
        </p>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td className="desc-follow">
                <code>ms</code>
              </td>
              <td className="desc-follow">Number</td>
            </tr>
            <tr className="odd">
              <td colSpan={3}>
                <span className="desc">
                  Specifies the time in milliseconds to pause the animation for.
                  Defaults to <code>0</code> (no delay).
                </span>
              </td>
            </tr>
          </tbody>
        </table>

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

        <h3>Delete</h3>
        <p>
          <code>&lt;Delete/&gt;</code> is a helper component which deletes a
          specified number of characters as part of the typing animation.
        </p>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td className="desc-follow">
                <code>characters</code>
              </td>
              <td className="desc-follow">Number</td>
            </tr>
            <tr className="odd">
              <td colSpan={3}>
                <span className="desc">
                  Specifies the number of characters to delete. Defaults to{' '}
                  <code>0</code> (which deletes all the previously typed
                  characters).
                </span>
              </td>
            </tr>
          </tbody>
        </table>

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
      </section>
    </div>
  );
};
export default Api;
