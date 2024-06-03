import React from 'react';
import './App.css';
import Produtos from './components/produtos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Produtos</h1>
        <Produtos />
      </header>
    </div>
  );
}

export default App;

