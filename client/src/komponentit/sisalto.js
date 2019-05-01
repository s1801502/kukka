import React from 'react';

import Routes from '../routet/routes';


const Sisalto = ({ kirjauduttu, setKirjauduttu, onClickHandler}) => {


    return (
      <div className="keskikaista">
        {kirjauduttu && <a href="/" onClick={onClickHandler} ><img src="./kuvat/arrow.png" height="50" 
        alt="linkki etusivulle" /></a>}
        
        <Routes kirjauduttu={kirjauduttu} setKirjauduttu={setKirjauduttu} />
      </div>
    );
};

export default Sisalto;