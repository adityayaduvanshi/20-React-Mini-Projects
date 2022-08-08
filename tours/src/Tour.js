import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, deleteHandler }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="img"></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="price">${price}</h4>
        </div>

        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}{" "}
          <button onClick={() => setReadMore(!readMore)}>
            {!readMore ? "Read more" : "Show Less"}
          </button>{" "}
        </p>
        <button onClick={() => deleteHandler(id)} className="delete-btn">
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
