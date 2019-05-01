import React from 'react';
import { Link } from 'react-router-dom';

const ValikonSisalto = ({ setKirjauduttu }) => {

    return (
        <div className="valikko">
            <span className="w3-left kuva"><img src="./kuvat/rose.png" alt="Kuva kukasta" height="320"/></span>
    
            <div className="button-group w3-padding">

            <Link to="/haeKaikki" className="w3-center">
                <button className="w3-btn w3-round-xxlarge w3-margin w3-large w3-card-4 w3-ripple button">
                Hae kaikki</button></Link>

            <Link to="/haeKukka" className="w3-center">
                <button className="w3-btn w3-round-xxlarge w3-margin-bottom w3-large w3-card-4 w3-ripple button">
                Hae kukka</button></Link>

            <Link to="/lisaaKukka" className="w3-center">
                <button className="w3-btn w3-round-xxlarge w3-margin-bottom w3-large w3-card-4 w3-ripple button">
                Lisää kukka</button></Link>

            <Link to="/muutaKukka" className="w3-center">
                <button className="w3-btn w3-round-xxlarge w3-margin-bottom w3-large w3-card-4 w3-ripple button">
                Muuta kukan tietoja</button></Link>

            <Link to="/poistaKukka" className="w3-center">
                <button className="w3-btn w3-round-xxlarge w3-margin-bottom w3-large w3-card-4 w3-ripple button">
                Poista kukka</button></Link>

            <Link to="/" className="w3-center">
                <button className="w3-btn w3-round-xxlarge w3-large w3-card-4 w3-ripple button" 
                onClick={() => setKirjauduttu(false)}>Kirjaudu ulos</button></Link>

            </div>
        </div>
    );
};

export default ValikonSisalto;