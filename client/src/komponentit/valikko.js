import React from 'react';
import ValikonSisalto from './valikonSisalto';


const Valikko = ({ setKirjauduttu }) => {

  return (
    <div>
        <ValikonSisalto setKirjauduttu={setKirjauduttu} /> 
    </div>
  );

};

export default Valikko;