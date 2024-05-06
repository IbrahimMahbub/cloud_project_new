import React, { useState } from 'react';
import { Auth } from 'aws-amplify'; // Import Auth from 'aws-amplify'

const SupportFeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic for handling the feedback submission, such as sending it to a backend server
    console.log('Feedback:', feedback);
    // Reset form field
    setFeedback('');
  };

  return (
    <div>
      <h2>Support Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default SupportFeedbackForm;
