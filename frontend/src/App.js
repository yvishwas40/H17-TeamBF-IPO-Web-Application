// App.js
import React, { useState } from 'react';
import Login from './Login';
import ForgotPassword from './Forgotpassword';
import Signup from './Signup';
import './Login';

function App() {
  const [activeForm, setActiveForm] = useState('login');

  const handleFormSwitch = (formName) => {
    setActiveForm(formName);
  };

  return (
    <div className="app-container">
      {activeForm === 'login' && <Login onSwitchForm={handleFormSwitch} />}
      {activeForm === 'forgotPassword' && <ForgotPassword onSwitchForm={handleFormSwitch} />}
      {activeForm === 'signup' && <Signup onSwitchForm={handleFormSwitch} />}
    </div>
  );
}

export default App;
