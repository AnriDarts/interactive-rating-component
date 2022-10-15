import "./postRate.scss";
import illustration from "../images/illustration-thank-you.svg";

import React from "react";

const PostRate = ({ rate }) => {
  return (
    <div className="post-rate">
      <div className="wrapper">
        <div className="logo">
          <img src={illustration} alt="" />
        </div>

        <div className="you-rate">You selected {rate} out of 5</div>

        <div className="message-text">
          <div className="main">Thank you!</div>
          <div className="sub">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRate;
