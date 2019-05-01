import React, { useState } from 'react';

import './App.css';

import Header from './komponentit/header';
import Sisalto from './komponentit/sisalto';
import Footer from './komponentit/footer';



function App() {

  const [kirjauduttu, setKirjauduttu] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    window.history.back();
  }

  return (
    <div>
      <Header />
      <Sisalto kirjauduttu={kirjauduttu} setKirjauduttu={setKirjauduttu} onClickHandler={onClickHandler} />
      <Footer />
    </div>
  );
}

export default App;
