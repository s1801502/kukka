import React from 'react';

const LisaaKukkaTable = ({ valittu }) => {
    
    return (
        <table className="w3-center tablekysely" style={{ padding: 25 }}>
            <tbody>
                <tr><td className="w3-left w3-padding"><label>kukan tunniste: </label></td>
                    <td><input type="text" name="kukanTunniste" disabled={valittu ? true : false} 
                    defaultValue={valittu && valittu[0].kukanTunniste} className="w3-input" 
                    placeholder="Ex: 2" required pattern="[0-9]{1,4}" maxLength="4" style={{width: '4em'}} /></td></tr>

                <tr><td className="w3-left w3-padding"><label>nimi: </label></td>
                    <td><input type="text" name="nimi" defaultValue={valittu && valittu[0].nimi} 
                    className="w3-input" placeholder="Ex: Vuokko" required pattern="[A-Za-zÄÖäö ]{1,}"
                    maxLength="11" style={{width: '11em'}}/></td></tr>

                <tr><td className="w3-left w3-padding"><label>viljelijä: </label></td>
                    <td><input type="text" name="viljelija" defaultValue={valittu && valittu[0].viljelija} 
                    className="w3-input" placeholder="Ex: Veijalainen" required 
                    style={{width: '11em'}} pattern="[A-Za-zÄÖäö ]{1,}" /></td></tr>

                <tr><td className="w3-left w3-padding"><label>lukumäärä: </label></td>
                    <td><input type="text" name="lukumaara" defaultValue={valittu && valittu[0].lukumaara} 
                    className="w3-input" placeholder="Ex: 45" required style={{width: '11em'}} pattern="[0-9]{1,}" /></td></tr>

                <tr><td className="w3-left w3-padding"><label>kasvupaikka: </label></td>
                    <td><input type="text" name="kasvupaikka" defaultValue={valittu && valittu[0].kasvupaikka} 
                    className="w3-margin-bottom w3-input" placeholder="Ex: niitty" required 
                    style={{width: '11em'}} pattern="[A-Za-zÄÖäö ]{1,}" /></td></tr>


                <tr className="ylamarginaali"><td colSpan="2" ><input type="submit" className="w3-btn w3-card-4 w3-ripple w3-round fontti ylamarginaali"
                    value="Lähetä" />
                </td></tr>
            </tbody>
        </table>
    );
};

export default LisaaKukkaTable;