import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import NotFound from '../komponentit/notFound';
import HaeKaikki from '../komponentit/haeKaikki';
import Valikko from '../komponentit/valikko';
import LisaaKukka from '../komponentit/lisaaKukka';
import HaeKukka from '../komponentit/haeKukka';
import Kirjautumislomake from '../komponentit/kirjautumislomake';


const Routes = ({ kirjauduttu, setKirjauduttu }) => {


    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" render={() => (kirjauduttu ? <Valikko setKirjauduttu={setKirjauduttu}/> : <Kirjautumislomake setKirjauduttu={setKirjauduttu} />)} exact />
                <Route path="/haeKaikki" component={HaeKaikki} />
                <Route path="/haeKukka" component={HaeKukka} />
                <Route path="/lisaaKukka" component={LisaaKukka} />
                <Route path="/muutaKukka" component={HaeKaikki} />
                <Route path="/poistaKukka" component={HaeKaikki} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );

};

export default Routes;