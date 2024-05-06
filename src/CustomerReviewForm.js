import React, { useState } from 'react';
import { Auth } from 'aws-amplify'; // Import Auth from 'aws-amplify'
import { fetchAuthSession } from 'aws-amplify/auth';


const CustomerReviewForm = () => {
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic for handling the review submission, such as sending it to a backend server
    console.log('Email:', email);
    console.log('Review:', review);
    // Reset form fields
    setEmail('');
    setReview('');
  };

  return (
    <div>
      <h2>Customer Review Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default CustomerReviewForm;
