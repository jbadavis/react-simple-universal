import React from 'react';
import Routes from './Routes';
import Header from './components/Header/Header';

import styles from '../scss/core.scss';

const App = () => {
  return (
    <main>
      <Header />
      <Routes />
    </main>
  );
};

export default App;
