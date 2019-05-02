import React, { useState } from 'react';

import './App.css';

import Header from './komponentit/header';
import Sisalto from './komponentit/sisalto';
import Footer from './komponentit/footer';



function App() {

  const [kirjauduttu, setKirjauduttu] = useState(false);

  const edelliselleSivulle = (e) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      window.history.back();  
      document.activeElement.blur();
    }
  }

  return (
    <div>
      <Header />
      <Sisalto kirjauduttu={kirjauduttu} setKirjauduttu={setKirjauduttu} edelliselleSivulle={edelliselleSivulle} />
      <Footer />
    </div>
  );
}

export default App;
