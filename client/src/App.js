import React from 'react';
import Valikko from './komponentit/valikko';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import NotFound from './komponentit/notFound';
import HaeKaikki from './komponentit/haeKaikki';
import Footer from './komponentit/footer';
import LisaaKukka from './komponentit/lisaaKukka';
import HaeKukka from './komponentit/haeKukka';



function App() {


  const onClickHandler = (e) => {
    e.preventDefault();
    window.history.back();
    
  }
  
  return (
    <div>
      <div className="w3-black w3-round w3-card-4">
      
      <h1 className="title w3-padding w3-animate-fading">Kukkatietokanta</h1>
      </div>
      <div className="keskikaista">
      <a href="/" onClick={onClickHandler} ><img src="./kuvat/arrow.png" height="50" alt="linkki etusivulle" /></a>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Valikko />} exact />
          <Route path="/haeKaikki" component={HaeKaikki} />
          <Route path="/haeKukka" component={HaeKukka} />
          <Route path="/lisaaKukka" component={LisaaKukka}/>
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
