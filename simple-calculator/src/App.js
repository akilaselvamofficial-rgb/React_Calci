import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (number) => {
    if (display === "Error") {
      setDisplay(number);
    } else {
      setDisplay(display === "0" ? number : display + number);
    }
  };

  const handleOperator = (operator) => {
    if (display === "Error") {
      return;
    }

    setDisplay((prev) => prev + operator);
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleDecimal = () => {
    if (display === "Error") {
      setDisplay("0.");
      return;
    }

    setDisplay((prev) => prev + ".");
  };

  const handleEqual = () => {
    try {
      const expression = display
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-");

      const result = Function(
        `"use strict"; return (${expression})`
      )();

      setDisplay(String(result));
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator-page">

      <div className="calculator">

        <div className="calculator-header">
          <h1>Simple Calculator</h1>
          <p>React Calculator</p>
        </div>

        <div className="display">
          {display}
        </div>

        <div className="buttons">

          {/* First Row */}
          <button
            className="clear"
            onClick={handleClear}
          >
            C
          </button>

          <button
            className="operator"
            onClick={() => handleOperator("÷")}
          >
            ÷
          </button>

          <button
            className="operator"
            onClick={() => handleOperator("×")}
          >
            ×
          </button>

          <button
            className="operator"
            onClick={() => handleOperator("−")}
          >
            −
          </button>

          {/* Second Row */}
          <button onClick={() => handleNumber("7")}>
            7
          </button>

          <button onClick={() => handleNumber("8")}>
            8
          </button>

          <button onClick={() => handleNumber("9")}>
            9
          </button>

          <button
            className="operator"
            onClick={() => handleOperator("+")}
          >
            +
          </button>

          {/* Third Row */}
          <button onClick={() => handleNumber("4")}>
            4
          </button>

          <button onClick={() => handleNumber("5")}>
            5
          </button>

          <button onClick={() => handleNumber("6")}>
            6
          </button>

          <button
            className="equal"
            onClick={handleEqual}
          >
            =
          </button>

          {/* Fourth Row */}
          <button onClick={() => handleNumber("1")}>
            1
          </button>

          <button onClick={() => handleNumber("2")}>
            2
          </button>

          <button onClick={() => handleNumber("3")}>
            3
          </button>

          {/* Fifth Row */}
          <button
            className="zero"
            onClick={() => handleNumber("0")}
          >
            0
          </button>

          <button onClick={handleDecimal}>
            .
          </button>

        </div>

        <footer className="footer">
          <p>
            <strong>AKILA S</strong>
          </p>

          <p>
            Register No:
            <strong> 212225220008</strong>
          </p>

          <p className="project-name">
            Simple Calculator • React Project
          </p>
        </footer>

      </div>

    </div>
  );
}

export default App;