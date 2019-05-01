import React from 'react';

import Routes from '../routet/routes';


const Sisalto = ({ kirjauduttu, setKirjauduttu, edelliselleSivulle}) => {

    const handleOnMouseOver = (e) => {
      e.target.src = "./kuvat/arrow1.png";
    }

    const handleOnMouseOut = (e) => {
      e.target.src = "./kuvat/arrow.png";
    }

    return (
      <div className="keskikaista">
      
        {kirjauduttu && <a href="/" onClick={edelliselleSivulle} ><img src="./kuvat/arrow.png" height="50" 
         alt="linkki etusivulle" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} name="nuoli" /></a>}
        
        <Routes kirjauduttu={kirjauduttu} setKirjauduttu={setKirjauduttu} />
      </div>
    );
};

export default Sisalto;