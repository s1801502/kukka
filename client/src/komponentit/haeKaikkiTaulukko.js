import React from 'react';
import LuoRivi from './luoRivi';

const HaeKaikkiTaulukko = ({ tiedot, riviPainettu, pathname }) => {

    

    const rivit = tiedot.map(objekti => {
       return <LuoRivi rivi={objekti} key={objekti.kukanTunniste} id={objekti.kukanTunniste} riviPainettu={riviPainettu} pathname={pathname} />
    });

    return (
        <div className="table">
            <table className="w3-table w3-striped">
            
                <thead>
                    <tr>
                        <td>kukanTunniste</td>
                        <td>nimi</td>
                        <td>viljelija</td>
                        <td>lukumaara</td>
                        <td>kasvupaikka</td>
                    </tr>
                </thead>

                <tbody>
                    {rivit}
                </tbody>

            </table>
        </div>
    );

};


export default HaeKaikkiTaulukko;