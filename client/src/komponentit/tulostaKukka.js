import React from 'react';



const TulostaKukka = ({ kukka }) => {
    
    return (
        <div className="tablekysely">
            <h1 className="w3-text-red tulos w3-center">Haun tuottama kukka</h1>
            <table className="w3-table w3-striped"> 
                <tbody>
                    <tr><td>Kukan tunniste</td><td className="w3-text-blue">{kukka.kukanTunniste}</td></tr>
                    <tr><td>Nimi</td><td className="w3-text-blue">{kukka.nimi}</td></tr>
                    <tr><td>Viljelijä</td><td className="w3-text-blue">{kukka.viljelija}</td></tr>
                    <tr><td>Lukumäärä</td><td className="w3-text-blue">{kukka.lukumaara}</td></tr>
                    <tr><td>Kasvupaikka</td><td className="w3-text-blue">{kukka.kasvupaikka}</td></tr>
                </tbody>
            </table>
            
        </div>
    );
};

export default TulostaKukka;