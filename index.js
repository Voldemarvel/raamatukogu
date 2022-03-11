const app = require('express')()
const port = 8080
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json')

app.get('/games', (req, res) => {
    res.send(['witcher 3', 'Cyberpunk 2077'])
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    console.log('API up at: http://localhost:8080')
})