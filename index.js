const app = require('express')()
const port = 8080
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json')

app.get('/games', (req, res) => {
    res.send(['The last Wish', 'Varastatud oranž jalgratas'])
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    console.log('API up at: http://localhost:8080')
})