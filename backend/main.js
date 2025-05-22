const express = require('express')
const cors = require('cors')
const port = 3000

const app = express()

app.use(express.json())
app.use(cors())

let listaTarefas = []

app.get('/tarefas', (req, res) => {
    res.status(200).send(listaTarefas)
})

app.get('/tarefas/:id', (req, res) => {
    const id = req.params.id

    const item = listaTarefas.find((item) => item.id == id)

    if(item != undefined){
        res.send(item)
    } else {
        res.status(404).send({
            mensagem: "A tarefa não existe"
        })
    }
})

app.put('/tarefas/:id', (req, res) => {
    const {nome, descricao, status} = req.body
    const id = Number(req.params.id)


    const itemAtualizado = {
        id,
        nome,
        descricao,
        status
    }

    const index = listaTarefas.findIndex((item) => item.id == id)

    if(index != -1){
        listaTarefas[index] = itemAtualizado
        res.send({
            mensagem: "Tarefa atualizada com sucesso!"
        })
    } else {
        res.status(404).send({
            mensagem: "Tarefa não encontrada"
        })
    }
})

app.post('/tarefas', (req, res) => {
    console.log(req.body)

    const {nome, descricao, status} = req.body

    const item = {
        id: listaTarefas.length + 1,
        nome,
        descricao,
        status
    }

    listaTarefas.push(item)

    res.status(200).send({
        mensagem: "Tarefa adicionada com sucesso!"
    })
})

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const novaListaTarefas = listaTarefas.filter((item) => item.id != id)

    listaTarefas = novaListaTarefas

    res.send({
        mensagem: `Tarefa com o id ${id} removida com sucesso!`
    })
})

app.listen(port, () => {
    console.log('o servidor tá rodando')
})