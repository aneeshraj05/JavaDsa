import React from "react";
import lamp from "./quotes.png";
import "./quotes.css";
import "../../index.css";
const Quotes = () => {
  return (
    <div className="quotes-container flip-item">
      <img
        src={lamp}
        alt="Quotes"
        className="quotes-image"
      />
    </div>
  );
};

export default Quotes;