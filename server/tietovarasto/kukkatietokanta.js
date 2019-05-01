'use strict';

const Tietokanta = require('./tietokanta');

const haeKaikkiSql = 'select kukanTunniste, nimi, viljelija, lukumaara, kasvupaikka from kukka';
const haeSql = 'select kukanTunniste, nimi, viljelija, lukumaara, kasvupaikka from kukka where kukanTunniste = ?';
const lisaaSql = 'insert into kukka (kukanTunniste, nimi, viljelija, lukumaara, kasvupaikka) values (?, ?, ?, ?, ?)';
const paivitaSql = 'update kukka set nimi = ?, viljelija = ?, lukumaara = ?, kasvupaikka = ? where kukanTunniste = ?';
const poistaSql = 'delete from kukka where kukanTunniste = ?';

module.exports = class Kukkatietokanta {
    
    constructor(optiot) {  
        this.kukat = new Tietokanta(optiot);
    }

    haeKaikki() {   
        return this.kukat.suoritaKysely(haeKaikkiSql);
    }

    haeKukka(kukanTunniste) {
        return this.kukat.suoritaKysely(haeSql, +kukanTunniste);
    }

    lisaaKukka(body) {
        let paramTaulukko = [];

        for (let parametri in body) {
            paramTaulukko.push(body[parametri]);
        }
        
        return this.kukat.suoritaKysely(lisaaSql, paramTaulukko);
    }

    paivitaKukka(body) {
        let paramTaulukko = [];

        for (let parametri in body) {
            paramTaulukko.push(body[parametri]);
        }
        
        return this.kukat.suoritaKysely(paivitaSql, paramTaulukko);
    }

    poistaKukka(kukanTunniste) {
        return this.kukat.suoritaKysely(poistaSql, +kukanTunniste);
    }

}