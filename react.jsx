import React, { useState } from 'react';
import './App.css';

const users = [
  { name: 'John Doe', age: 25 },
  { name: 'Alexander', age: 17 },
  { name: 'Nelson Mandela', age: 78 },
  { name: 'Mahatma Gandhi', age: 56 },
  { name: 'Nikol Tesla', age: 39 }
];

function App() {
  const [sortedNames, setSortedNames] = useState('');
  const [yourName, setYourName] = useState('');

  const sortAndDisplay = () => {
    const sortedUsers = [...users].sort((a, b) => a.age - b.age);
    const sortedNames = sortedUsers.map(user => user.name).join(', ');
    setSortedNames(sortedNames);
    alert(`Sorted Names: ${sortedNames}`);
  };

  const showMobileMessage = () => {
    const name = prompt('Please enter your name:');
    if (name) {
      setYourName(name);
      alert(`Thank you for choosing mobile, ${name}`);
    }
  };

  const disableGoogleButton = () => {
    alert('Continue with Google button is disabled.');
  };

  return (
    <div className="App">
      <header>
        <h1>Your Webpage</h1>
      </header>
      <main>
        <div className="mobile-title">
          <h2>Mobile Version</h2>
          <img src="image.jpg" alt="Mobile Image" />
        </div>
        <button onClick={sortAndDisplay}>Continue with Email</button>
        <button onClick={showMobileMessage}>Continue with Mobile</button>
        <button onClick={disableGoogleButton} disabled>
          Continue with Google
        </button>
      </main>
    </div>
  );
}

export default App;
