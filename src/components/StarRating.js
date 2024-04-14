import React, { useState } from "react";

const StarRating = ({ totalStar }) => {
  const [rating, setRating] = useState(0);
  const [input, setInput] = useState("");
  let arr = [...Array(totalStar)];
  const handleSubmit = () => {
    console.log("rating", { rating, input });
    setRating(0);
    setInput("");
  };
  return (
    <div className="start-container">
      <h1>Give rating for this tutorial</h1>
      <div className="star-item">
        {arr.map((_, index) => {
          return (
            <Star
              key={index}
              onClick={() => setRating(index + 1)}
              filled={index < rating}
            />
          );
        })}
      </div>
      <p>
        Rated: {rating} out of {totalStar}
      </p>
      <div className="input-item">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="write something..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

const Star = ({ onClick, filled }) => {
  return (
    <span
      style={{
        fontSize: "25px",
        cursor: "pointer",
        color: filled ? "gold" : "gray",
      }}
      onClick={onClick}
    >
      ★
    </span>
  );
};
export default StarRating;
