import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  return (
    <div className="container">
      <div className={`dropdown`}>
        <button onMouseUp={handleDropdownClick} className="dropdown-btn">
          {dropdownValue === "" ? "Enter your option" : dropdownValue}
        </button>
        <div
          className={`dropdown-items ${
            dropdownState ? "isVisible" : "isHidden"
          }`}
        >
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("FIRST...!")}
            >
            OPTION FIRST
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("SECOND...!")}
            >
            OPTION SECOND
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("THIRD...!")}
            >
            OPTION THIRD
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("FOURTH...!")}
            >
           OPTION FOURTH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
