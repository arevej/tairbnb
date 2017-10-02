import React, { Component } from 'react';

function Star({ filled }) {
  return (
    <span style={{ fontSize: 16, color: filled ? '#12a599' : '#ccc' }}>★</span>
  );
}

function Stars({ stars }) {
  return (
    <span>
      <Star filled={stars >= 1} />
      <Star filled={stars >= 2} />
      <Star filled={stars >= 3} />
      <Star filled={stars >= 4} />
      <Star filled={stars >= 5} />
    </span>
  );
}

export default Stars;
