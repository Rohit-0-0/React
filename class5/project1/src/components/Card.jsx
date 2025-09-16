import React from 'react';
import './Card.css'; // import the CSS file

function Card({ data }) {
  if (!data) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="card">
      <img className="card-img" src={data.image} alt={data.title} />
      <h2 className="card-title">{data.title}</h2>
      <p className="card-category">{data.category}</p>
      <p className="card-description">{data.description}</p>
      <div className="card-footer">
        <span className="card-price">₹{data.price}</span>
        <span className="card-rating">⭐+ {data.rating?.rate} / 5</span>
      </div>
    </div>
  );
}

export default Card;