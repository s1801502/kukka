import React, { useState, useEffect } from 'react';

const PoistaKukka = ({ id }) => {

    const [onnistui, setOnnistui] = useState(false);
    const [tunniste] = useState(id);
    

    useEffect(() => {

        (async () => {

            const vastaus = await fetch('http://localhost:3001/poistaKukka', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                method: 'POST',
                body: JSON.stringify({tunniste})
                }
            );

            const vastausJson = await vastaus.json();

            if (vastausJson.muutetutRivitLkm)
                await setOnnistui(true);
        })();
    });




    return (
        <div>
            {onnistui ? <h1>Poistit kukan</h1> : <h1>Jotain meni pieleen</h1>}
        </div>
    );
};

export default PoistaKukka;