const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡askeladd!');
});

app.get('/json', (req, res) => {
  res.json({ mensaje: '¡Hola, mundo en formato JSON!' });
});

app.get('/viland', (req, res) => {
  res.json({ Nombre : 'Santiago Rangel Bonilla',
    edad : '16' ,
    ID :  'la salle de campoamor',
    objetivo : 'ser libre a mi modo'

   });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

