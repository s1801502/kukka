import React from 'react';

export default ({ error = 'Mahdollisesti syötit väärän tunnisteen'}) => (
    <div>
        <h1 className="w3-center w3-text-red tulos">Tapahtui virhe</h1>
        <h2 className="w3-center">{error}</h2>
    </div>
);