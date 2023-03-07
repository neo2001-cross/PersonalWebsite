import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Wallpaper from './components/Wallpaper';
import WorkContainer from './components/WorkContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Wallpaper />
      <WorkContainer />
    </div>
  );
}

export default App;
