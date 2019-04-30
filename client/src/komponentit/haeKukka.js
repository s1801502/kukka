import React, { useState } from "react";
import TulostaKukka from './tulostaKukka';
import Virhe from './virhe';


const HaeKukka = () => {

  const [kukka, setKukka] = useState(null);
  const [error, setError] = useState(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const tunniste = e.target.tunniste.value;

    const res = await fetch('http://localhost:3001/haeKukka', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ tunniste })
    });

    const tulosJson = await res.json();
    console.log(tulosJson.tulos);

    if (tulosJson.tulos[0]) {
      const { tulos } = tulosJson;
      await setKukka(tulos[0]);
    } else 
      setError(true);
  };

  return (
    <div>
      {error ?  <Virhe error={error} /> : (kukka ? <TulostaKukka kukka={kukka} /> : <div>
        <h1 className="w3-center w3-text-red tulos">Hae Kukka</h1>
        <h2 className="w3-center">Millä tunnisteella haluat kukkaa etsiä?</h2>

        <form className="haeKukkaTable" onSubmit={handleOnSubmit}>
          <div className="flex">
            <label>Kukan tunniste: </label>
            <input className="w3-input w3-center" type="text" style={{ width: '4em' }} maxLength="4" name="tunniste" 
            pattern="[0-9]{1,4}" placeholder="Ex: 12" required /></div>
            <input type="submit" value="Lähetä"
            className="w3-button w3-card-4 w3-ripple w3-round fontti ylamarginaali" />
        </form>
      </div>)}
    </div>
  );
};

export default HaeKukka;
