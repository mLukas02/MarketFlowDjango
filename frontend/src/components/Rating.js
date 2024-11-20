import React from 'react';

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <i
            style={{ color }}
            className={
              value >= index + 1
                ? 'fas fa-star'
                : value >= index + 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
      ))}
      {text && <span>{text}</span>}
    </div>
  );
}

export default Rating;
