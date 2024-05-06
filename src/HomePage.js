// HomePage.js
import React from 'react';
import { Auth } from 'aws-amplify';



const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <a href='/customer'>write a review here</a>
    </div>
  );
};

export default HomePage;
