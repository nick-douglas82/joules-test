import React from 'react';
import './assets/app.scss';
import SubNavigation from './components/Navigation/SubNavigation';
import Logo from './components/Logo';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <SubNavigation />
      <Logo />
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
