import React from 'react';
import { WorldClock } from './components/worldclock/worldClock';
import { Menu } from './components/menu';
import './style/main.css'
import './style/worldClock.css'
function App() {
  return (
    <div className="App container">
      <div className='box'>
        <WorldClock />
        <Menu/>
      </div>
    </div>
  );
}

export default App;
