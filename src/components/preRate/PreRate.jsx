import "./preRate.scss";

import React from "react";

const PreRate = ({ rate, setRate, setDone }) => {
  const options = [1, 2, 3, 4, 5];

  return (
    <div className="preRate">
      <div className="wrapper">
        <div className="logo">
          <img src="../../../public/icon-star.svg" alt="star icon" />
        </div>
        <div className="description">
          <div className="main">How did we do?</div>
          <div className="sub">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </div>
        </div>
        <div className="options">
          {options.map((option, i) => (
            <div
              className={
                rate === (i + 1).toString() ? "option active" : "option"
              }
              onClick={() => setRate((i + 1).toString())}
            >
              {option}
            </div>
          ))}
        </div>
        <button className="submit" onClick={() => setDone(true)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PreRate;
