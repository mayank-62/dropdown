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
        <button onClick={handleDropdownClick} className="dropdown-btn">
          {dropdownValue === "" ? "Dropdown" : dropdownValue}
        </button>
        <div
          className={`dropdown-items ${
            dropdownState ? "isVisible" : "isHidden"
          }`}
        >
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("Yes.....!")}
            >
            Yes.....!
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("NO.....!")}
            >
            NO.....!
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("Can't Say.....!")}
            >
            Probably not
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("By Pradeep....!")}
            >
            By Pradeep....!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
