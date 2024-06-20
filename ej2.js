const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hola bienvenido/a')
})

app.get('/Productos', (req, res) => {
    res.send('listado de productos')
})

app.post('/Productos', (req, res) => {
    res.status(200).send(`crear un producto ${req.body.name}`)
})

app.put('/Productos', (req, res) => {
    res.status(200).send(`actualizar un producto ${req.body.name}`);
})

app.delete('/Productos', (req, res) => {
    res.status(200).send('borrar un producto');
})

app.get('/Usuarios', (req, res) => {
    res.status(200).send('listado de usuarios');
})

app.post('/Usuarios', (req, res) => {
 res.status(200).send(`crear un usuario ${req.body.name}`);
})

app.put('/Usuarios', (req, res) => {
    res.status(200).send(`actualizar un usuario ${req.body.name}`);
})

app.delete('/Usuarios', (req, res) => {
    res.send('borrar un usuario');
})



app.listen(PORT, () => console.log(`Server started on port ${PORT}`))