import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react'; // Import AmplifyAuthenticator
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import CustomerReviewForm from './CustomerReviewForm';
import SupportFeedbackForm from './SupportFeedbackForm';

Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
      <Authenticator>
        <Routes>
          <Route path="/customer" component={CustomerReviewForm} />
          <Route path="/support" component={SupportFeedbackForm} />
          <Route path="/" exact render={() => <h1>Welcome!</h1>} />
        </Routes>
      </Authenticator>
    </BrowserRouter>
  );
}

export default App;
