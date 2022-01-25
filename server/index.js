const express = require('express');
const cors = require('cors');
const houseCtrl = require('./controller');
const { getAllHouses, createHouse, deleteHouse, updateHouse} = require('./controller');


const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/houses', getAllHouses)
app.post('/api/houses', createHouse)
app.delete('/api/houses/:id', deleteHouse)
app.put('/api/houses/:id', updateHouse)

const port = 4004

app.listen(port, () => console.log(`server running on ${port}`))