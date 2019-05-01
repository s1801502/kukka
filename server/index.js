
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

const Kukkatietokanta = require('./tietovarasto/kukkatietokanta');
let kukka = null; 

app.get('/', (req, res) => {

});

app.post('/kirjaudu', async (req, res) => {

    const { host, port, user, password } = req.body;
    
    const optiot = {
        host,
        port,
        user,
        password,
        database: 'kukkatietokanta'
    }

    
    kukka = await new Kukkatietokanta(optiot);
        
    try {
        const tulos = await kukka.haeKaikki();
        res.send({onnistui: true});
    } catch (error) {
        res.send({onnistui: false});
    }

});

app.get('/haeKaikki', async (req, res) => {

    const tulos = await kukka.haeKaikki();
    res.send({tulos: tulos.kyselynTulos});
});

app.post('/haeKukka', async (req, res) => {
    try {
        const tulos = await kukka.haeKukka(req.body.tunniste);
        res.send({tulos: tulos.kyselynTulos});
    } catch (error) {
        res.send({virhe: error.message});
    }
    
});


app.post('/lisaaKukka', async (req, res) => {
    
    try {
        const tulos = await kukka.lisaaKukka(req.body);
        res.send(tulos.kyselynTulos);
    } catch (error) {
        res.send({virhe: error.message});
    }
    
    
});

app.post('/paivitaKukka', async (req, res) => {
    const tulos = await kukka.paivitaKukka(req.body);
    res.send(tulos.kyselynTulos);
});

app.post('/poistaKukka', async (req, res) => {
    const tulos = await kukka.poistaKukka(req.body.tunniste);
    res.send(tulos.kyselynTulos);
});



app.listen(port, () => {
    console.log('Serveri käynnissä!');
});