import React from 'react';
import './App.css';
import AddTask from './AddTask';
import ListTask from './ListTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux ToDo App</h1>
      </header>
      <main>
        <AddTask />
        <ListTask />
      </main>
    </div>
  );
}

export default App;

