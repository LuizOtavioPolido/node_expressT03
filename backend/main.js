const express = require('express')
const cors = require('cors')
const port = 3000

const app = express()
app.use(cors())

function retornaMensagem(req, res){
    res.send('eae zé')
}

app.get('/', retornaMensagem)

app.get('/usuarios/:id', (req, res) => {
    res.json({
        id: req.params.id,
        nome: 'node junior da silva pereira pelé'
    })
})

app.listen(port, () => {
    console.log('o servidor tá rodando')
})