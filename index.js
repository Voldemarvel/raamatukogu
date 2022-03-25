const app = require('express')()
const cors = require('cors')
const port = 8080
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json')

app.use(cors())
app.use(express.json())

const books = []

app.get('/books', (req, res) => {
    res.send(['The last Wish', 'Varastatud oranž jalgratas'])
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    console.log('API up at: http://localhost:8080')
})




//page 68 of 76
//need to make books list
