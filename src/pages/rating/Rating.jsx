import "./rating.scss";

import React, { useState } from "react";
import PostRate from "../../components/postRate/PostRate";
import PreRate from "../../components/preRate/PreRate";

const Rating = () => {
  const [rate, setRate] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="rating">
      <div className="wrapper">
        {!done && (
          <PreRate
            rate={rate}
            setRate={setRate}
            setDone={setDone}
            done={done}
          />
        )}
        {rate !== "" && done && <PostRate rate={rate} />}
      </div>
    </div>
  );
};

export default Rating;
