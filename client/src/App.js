import React, { useState } from 'react';
import Valikko from './komponentit/valikko';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import NotFound from './komponentit/notFound';
import HaeKaikki from './komponentit/haeKaikki';
import Footer from './komponentit/footer';
import LisaaKukka from './komponentit/lisaaKukka';
import HaeKukka from './komponentit/haeKukka';
import Kirjautumislomake from './komponentit/kirjautumislomake';
import Header from './komponentit/header';



function App() {

  const [kirjauduttu, setKirjauduttu] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    window.history.back();

  }

  return (
    <div>
      <Header />

      <div className="keskikaista">

        {kirjauduttu && <a href="/" onClick={onClickHandler} ><img src="./kuvat/arrow.png" height="50" 
        alt="linkki etusivulle" /></a>}
        
        <BrowserRouter>
          <Switch>
            <Route path="/" render={() => (kirjauduttu ? <Valikko /> : <Kirjautumislomake setKirjauduttu={setKirjauduttu} />)} exact />
            <Route path="/haeKaikki" component={HaeKaikki} />
            <Route path="/haeKukka" component={HaeKukka} />
            <Route path="/lisaaKukka" component={LisaaKukka} />
            <Route path="/muutaKukka" component={HaeKaikki} />
            <Route path="/poistaKukka" component={HaeKaikki} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
