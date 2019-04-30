import React from 'react';


const LuoRivi = ({ rivi, id, riviPainettu, pathname}) => {
   
    let sarakkeet = [];
    const isPath = pathname !== '/haeKaikki';
    
    for (let sana in rivi) {
        sarakkeet.push(<td key={sana} className={"w3-text-blue " + (isPath ? "rivilinkki" : "")} >{rivi[sana]}</td>);
    }

    const linkinKasittelija = () => {
        if (isPath)
            riviPainettu(id);
    }

    return (
        <tr onClick={linkinKasittelija}>
            {sarakkeet}
        </tr>

    );
};

export default LuoRivi;