import React from 'react';
import './Loading.css';

const Loading = () => (
  <div>
    <div className="spinner">
      <div className="cube1" />
      <div className="cube2" />
    </div>
    <h1>Loading...</h1>
  </div>
);

export default Loading;
