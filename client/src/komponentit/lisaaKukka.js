import React, { useState } from 'react';
import LisaaUusiKukkaForm from './lisaaUusiForm';
import Onnistui from './onnistui';

const LisaaKukka = ({valittu}) => {

    const [ onnistui, setOnnistui] = useState(false);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const tiedot = !valittu ? {
            kukanTunniste: e.target.kukanTunniste.value,
            nimi: e.target.nimi.value,
            viljelija: e.target.viljelija.value,
            lukumaara: e.target.lukumaara.value,
            kasvupaikka: e.target.kasvupaikka.value
        } : {
            nimi: e.target.nimi.value,
            viljelija: e.target.viljelija.value,
            lukumaara: e.target.lukumaara.value,
            kasvupaikka: e.target.kasvupaikka.value,
            kukanTunniste: e.target.kukanTunniste.value
        };

        

        const path = valittu ? 'paivitaKukka': 'lisaaKukka';

        const vastaus = await fetch(`http://localhost:3001/${path}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },

            method: 'POST',
            body: JSON.stringify(tiedot)
            }
        );
        
        const vastausJson = await vastaus.json();

        if (vastausJson.muutetutRivitLkm)
            await setOnnistui(true);

    };

    return (
        
        <div>
            {onnistui ? <Onnistui /> : <div>
            <h1 className="w3-center tulos w3-text-red">Syötä tiedot</h1>
            <LisaaUusiKukkaForm handleOnSubmit={handleOnSubmit} valittu={valittu}/>
            </div>}
        </div> 

    );
}

export default LisaaKukka;