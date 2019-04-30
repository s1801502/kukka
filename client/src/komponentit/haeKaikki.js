import React, { useState, useEffect } from 'react';
import HaeKaikkiTaulukko from './haeKaikkiTaulukko';
import PoistaKukka from './poistaKukka';
import LisaaKukka from './lisaaKukka';


const HaeKaikki = (props) => {
    
    const { pathname } = props.location;

    const [data, setData] = useState([]);
    const [valittu, setValittu] = useState(null);

    const riviPainettu = async (id) => {
        const taulu = data.filter(objekti => {
            return objekti.kukanTunniste === id;
        })

        await setValittu(taulu);
        
    };

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/haeKaikki');
            const info = await res.json();
            const { tulos } = info;
            await setData(tulos);

        })();

    }, []);

    return (
        <div className="w3-center">
           {valittu ? (pathname === '/poistaKukka' ? <PoistaKukka id={valittu[0].kukanTunniste} /> : 
           <LisaaKukka valittu={valittu} />) : <div>
            { pathname === '/haeKaikki' ? <h1 className="w3-text-red tulos">Taulun sisältämät kukat</h1> :
            (pathname === '/poistaKukka' ? <h1 className="w3-text-red tulos">Valitse poistettava kukka</h1>  : 
            <div><h1 className="w3-text-red tulos">Valitse muutettava kukka</h1></div>)}
            <HaeKaikkiTaulukko tiedot={data} riviPainettu={riviPainettu} pathname={pathname} /></div>}
        </div>
    );
};


export default HaeKaikki;