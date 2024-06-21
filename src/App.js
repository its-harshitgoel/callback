import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from "react";

// Define the ChildComponent outside of the App component
// React.memo is used to memoize the component to prevent unnecessary re-renders
const ChildComponent = React.memo(({ count, onClick }) => {
  console.log("ChildComponent is rendering " + count + " times");
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={onClick}> Increment Count </button>
    </>
  );
});

// useCallback: This hook returns a memoized version of the callback that only changes if one of the dependencies has changed
// This is useful to prevent the reference of the function from changing on every render
// React.memo: Prevents the ChildComponent from re-rendering if its props have not changed
// useState: This hook lets you add state to a functional component
// useRef: This hook allows you to persist values between renders without causing a re-render

function App() {
  const [input, setInput] = useState(""); // State for input text
  const [count, setCount] = useState(0); // State for count
  // Using useCallback to memoize the incrementCount function
  const incrementCount = useCallback(() => setCount(count + 1), [count]);

  return (
    <div className="App">
      <br/>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input state on change
      />
      

      <button onClick={incrementCount}> Increment Count </button> {/* Button to increment count */}
      <h3>Input Text: {input}</h3>
      <h4>Count: {count}</h4>
      <hr />
      {/* Pass count and incrementCount as props to ChildComponent */}
      <ChildComponent count={count} onClick={incrementCount} />
    </div>
  );
}

export default App;
