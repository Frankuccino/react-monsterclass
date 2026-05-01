import React from "react";

const JSXRules = () => {
  return (
    <div>
      <h1>JSX Rules</h1>
      <p>These are the jsx Rules that you must follow:</p>
      <ul>
        <li>
          JSX must return a <strong>single parent element.</strong>
        </li>
        <li>
          JSX elements must be <strong>properly closed.</strong>
        </li>
        <li>
          JSX Attributes are written using camelCase (e.g., className, instead
          of class or htmlFor instead of for)
        </li>
      </ul>
    </div>
  );
};

export default JSXRules;
