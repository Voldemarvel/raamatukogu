const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080
app.use(cors())
app.use(express.json())
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json')

app.use(cors())

const books = [
    {id: 1, name: 'The Last Wish', price: 20.25},
    {id: 2, name: 'Naksitrallid', price: 15.95},
    {id: 3, name: 'Minecraft builders guide', price: 4.95},
    {id: 4, name: 'Varastatud oranž jalgratas', price: 5.95},
    {id: 5, name: 'The Art Of War', price: 20.95},
    {id: 6, name: "Harry Potter and the Sorcerer's stone", price: 31.95},
    {id: 7, name: 'Regretting you', price: 15.95},
    {id: 8, name: 'Tunnistaja', price: 37.95},
    {id: 9, name: 'Putini inimesed', price: 20.95},
]

app.get('/books', (req, res) => {
    res.send(books)
})
app.get('/books/:id', (req, res) => {
    if (typeof books[req.params.id - 1] === 'undefined') {
        return res.status(404).send({error: "book not found"})
    }
    res.send(books[req.params.id - 1])
 })
 app.post('/books', (req, res) => {
    let book = {
        id: books.length + 1,
        price: req.body.price,
        name: req.body.name
    }
    books.push(book)
    res.status(201)
        .location(`${getBaseUrl(req)}/books/${books.length}`)
        .send(book)
 })
 app.delete('/books/:id', (req, res) => {
    if (typeof books[req.params.id - 1] === 'undefined') {
        return res.status(404).send({error: "book not found"})
    }
    books.splice(req.params.id - 1, 1)
    res.status(204).send({error: "No Content"})
 });
 app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`)
 })
 function getBaseUrl(req) {
    return req.connection && req.connection.encrypted
        ? 'https' : 'http' + `://${req.headers.host}`
 }
 
