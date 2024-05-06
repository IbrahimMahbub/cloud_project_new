import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react'; // Import AmplifyAuthenticator
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import CustomerReviewForm from './CustomerReviewForm';
import SupportFeedbackForm from './SupportFeedbackForm';
import HomePage from './HomePage';


Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
      <Authenticator>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/customer" element={<CustomerReviewForm/>} />
          <Route path="/support" element={<SupportFeedbackForm/>} />
          
        </Routes>
      </Authenticator>
    </BrowserRouter>
  );
}

export default App;
