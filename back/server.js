const express = require('express');
const morgan = require('morgan');
const clientSession = require('client-sessions');
const helmet = require('helmet');
Api = require('./src/test');
var cors = require('cors');
const {SESSION_SECRET} = require('./config');
const app = express();
const db = require('./src/db');


Create_User = require('./src/user');
Connexion_User = require('./src/session');
GetPokemon = require('./src/Pokedex_api/Pokemon');
GetPokeball = require('./src/Pokedex_api/Pokeball');
GetType = require('./src/Pokedex_api/TypePokemon');
GetWeather = require('./src/Weather/Weather');
Spotify = require('./src/Spotify/Spotify');
OriginName = require('./src/Origine_name/OrigineName');
AddWidget = require('./src/Widget_Organis/add_Widget');
SuppWidget = require('./src/Widget_Organis/Supp_Widget');
GetWidget = require('./src/Widget_Organis/Get_Widget');

db.query('CREATE TABLE IF NOT EXISTS users ( id uuid PRIMARY KEY, email text UNIQUE, password text);').catch(err => console.log("PG ERROR", err));
db.query('CREATE TABLE IF NOT EXISTS widget ( id uuid PRIMARY KEY, pokeball boolean, pokedex boolean, TypePokemon boolean, Spotify boolean, Weather boolean, NameOrigin boolean);').catch(err => console.log("PG ERROR", err));

app.use(morgan('short'));
app.use(cors());
app.use(express.json());
app.use(
  clientSession({
    cookieName: 'session',
    secret: SESSION_SECRET,
    duration: 24 * 60 * 60 * 1000
  })
);
app.use(helmet());


app.use('/Api', Api);
app.use('/getweather', GetWeather);
app.use('/createuser', Create_User);
app.use('/connexionuser', Connexion_User);
app.use('/getpokemon', GetPokemon);
app.use('/getpokeball', GetPokeball);
app.use('/getype', GetType);
app.use('/OrigineName', OriginName);
app.use('/Spotify', Spotify);
app.use('/AddWidget', AddWidget);
app.use('/SuppWidget', SuppWidget);
app.use('/GetWidget', GetWidget);

let server;
module.exports = {
  start(port) {
    server = app.listen(port, () => {
      console.log(`App started on port ${port}`);
    });
    return app;
  },
  stop() {
    server.close();
  }
};
