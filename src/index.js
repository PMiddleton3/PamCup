import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './components/pages/home';

import './styles/UserProfile.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
  document.getElementById('root')
);

function App() {
  return (
    <div className="index-container">

          <Route path="/homePage" component={HomePage} />

    </div>
  );
}