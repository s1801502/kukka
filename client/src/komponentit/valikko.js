import React from 'react';
import { Link } from 'react-router-dom';

const Valikko = () => {

  return (
  <div className="valikko">
  <span className="w3-left kuva"><img src="./kuvat/rose.png" alt="Kuva kukasta" height="320"/></span>
    
    <div className="button-group w3-padding">

      <Link to="/haeKaikki" className="w3-center">
        <button className="w3-btn w3-round-xxlarge w3-margin w3-xlarge w3-card-4 w3-ripple button">
          Hae kaikki</button></Link>

      <Link to="/haeKukka" className="w3-center">
        <button className="w3-btn w3-round-xxlarge w3-margin w3-xlarge w3-card-4 w3-ripple button">
          Hae kukka</button></Link>

      <Link to="/lisaaKukka" className="w3-center">
        <button className="w3-btn w3-round-xxlarge w3-margin w3-xlarge w3-card-4 w3-ripple button">
          Lisää kukka</button></Link>

      <Link to="/muutaKukka" className="w3-center">
        <button className="w3-btn w3-round-xxlarge w3-margin w3-xlarge w3-card-4 w3-ripple button">
          Muuta kukan tietoja</button></Link>

      <Link to="/poistaKukka" className="w3-center">
        <button className="w3-btn w3-round-xxlarge w3-margin w3-xlarge w3-card-4 w3-ripple button">
          Poista kukka</button></Link>

    </div>
  </div>
);

}

export default Valikko;