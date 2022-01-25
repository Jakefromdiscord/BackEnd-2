const houses = require('./db.json')
const houseId = 4

module.exports = {
    getAllHouses:(req,res) =>{
        res.status(200).send(houses)
    },
    deleteHouse:(req,res) => {
        let {id} = req.params
        let index = houses.findIndex(houses => +houses.id === +id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },
    createHouse:(req,res) => {
        const {address, price, imageUrl} = req.body
        let newHouse = {
            id:houseId,
            address,
            price,
            imageUrl
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        houseId++
    },
    updateHouse:(req,res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(houses => +houses.id === +id)
        if(type === 'minus' && house[index].price <= 10000){
            res.status(400).send('Cant go that low')
        }else if(type === 'plus'){
            houses[index].price += 10000
        }else if(type === 'minus'){
            houses[index].price -= 10000
        }
        res.status(200).send(houses)
    }
}