import React, { useState } from 'react';

const Kirjautumislomake = ({ setKirjauduttu }) => {

    const [virhe, setVirhe] = useState(false);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const portti = e.target.port.value;
        

        const tiedot = {
            host: e.target.host.value,
            user: e.target.user.value,
            password: e.target.password.value,
            port: portti ? portti : 3306
        };

        const res = await fetch('http://localhost:3001/kirjaudu', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(tiedot)
        });

        const vastausJson = await res.json();

        if (vastausJson.onnistui === true)
            await setKirjauduttu(true);

        else {
            await setVirhe(true);
            nollaaVirhe();
        }
    }

    const nollaaVirhe = () => {
        setTimeout(() => {
            setVirhe(false);
        }, 3000);

    }

    return (
        <div>
            <h1 className="tulos w3-center w3-text-red">Kirjaudu sisään</h1>
            <form onSubmit={handleOnSubmit}>
                <table className="w3-center tablekysely" style={{ padding: 25 }}>
                    <tbody>
                        <tr><td className="w3-left w3-padding"><label>Host:<sup>*</sup> </label></td>
                            <td><input type="text" name="host" className="w3-input" style={{width: '10em'}} required /></td></tr>

                        <tr><td className="w3-left w3-padding"><label>Käyttäjä:<sup>*</sup> </label></td>
                            <td><input type="text" name="user" className="w3-input" style={{width: '10em'}} required /></td></tr>

                        <tr><td className="w3-left w3-padding"><label>Salasana: </label></td>
                            <td><input type="text" name="password" className="w3-input" style={{width: '10em'}} /></td></tr>

                        <tr><td className="w3-left w3-padding"><label>Portti: </label></td>
                            <td><input type="text" name="port" className="w3-input" style={{width: '10em'}} /></td></tr>


                        <tr className="ylamarginaali"><td colSpan="2" ><input type="submit" 
                        className="w3-btn w3-card-4 w3-ripple w3-round fontti ylamarginaali" value="Lähetä" />
                        </td></tr>
                    </tbody>
                </table>
            </form>
            {virhe && <h1 className="w3-center w3-text-red w3-animate-top">Virhe kirjautumisessa</h1>}
        </div>
    );
};

export default Kirjautumislomake;