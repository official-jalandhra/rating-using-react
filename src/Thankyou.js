import React from "react";
import "./Thankyou.css";
import newsvg from "./images/new.svg";

const Thankyou = ({ rating }) => {
  return (
    <div className="container thank">
      <img src={newsvg} alt="logo" />
      <div className="result">You selected {rating} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thankyou;
