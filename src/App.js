import React from 'react';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  return (
    <header className="App-header">
      <Contact avatar="https://randomuser.me/api/portraits/women/80.jpg" name="Heidi Rhodes" status={true} />
      <Contact avatar="https://randomuser.me/api/portraits/women/59.jpg" name="Phyllis Morris" status={false} />
      <Contact avatar="https://randomuser.me/api/portraits/men/11.jpg" name="Edwin Hugs" status={true} />
    </header>
  );
}

export default App;
