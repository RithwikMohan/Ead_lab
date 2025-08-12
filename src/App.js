import './App.css';
import React from 'react';
import Greeting from './Greetings';
import Profile from './Profile';
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';
import Products from './Products';
import MyButton from './MyButton';


function App() {
  const isLoggedIn = true;

  return (
    <div>
      <Greeting name="Rithwik" age={19} />
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
      <Profile name="Rithwik" age={19} />
      <Products />
      <MyButton/>
    </div>
  );
}

export default App;