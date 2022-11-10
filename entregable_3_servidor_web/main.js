const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 8080;

app.use(morgan('dev'));

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('productos.json');


app.get('/', (req, res) => {
    res.send("Bienvenido");
});

app.get('/productos', async (req, res) => {
    res.json(await contenedor.getAll());
})

app.get('/productoRandom', async (req, res) => {
    res.json(await contenedor.productRandom());
})

app.get('*', (req, res) => {
    res.send("404 No encontrado");
})

// start server
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});