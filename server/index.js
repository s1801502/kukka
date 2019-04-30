
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

const Kukkatietokanta = require('./tietovarasto/kukkatietokanta');
const kukka = new Kukkatietokanta();

app.get('/', (req, res) => {

});

app.get('/haeKaikki', async (req, res) => {

    const tulos = await kukka.haeKaikki();
    res.send({tulos: tulos.kyselynTulos});
});

app.post('/haeKukka', async (req, res) => {
    
    const tulos = await kukka.haeKukka(req.body.tunniste);
    res.send({tulos: tulos.kyselynTulos});
});


app.post('/lisaaKukka', async (req, res) => {
    
    const tulos = await kukka.lisaaKukka(req.body);
    res.send(tulos.kyselynTulos);
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