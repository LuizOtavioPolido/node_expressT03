const express = require('express')
const cors = require('cors')
const {DatabaseSync} = require('node:sqlite')
const port = 3000

const database = new DatabaseSync('./database.db')

const app = express()

app.use(express.json())
app.use(cors())

function createTable(){
    const query = `
        CREATE TABLE IF NOT EXISTS tarefa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT NOT NULL,
            status TEXT NOT NULL
        )
    `

    database.exec(query)
}

app.get('/tarefas', (req, res) => {
    const query = `
        SELECT * FROM tarefa
    `

    const stmt = database.prepare(query)
    const result = stmt.all()

    res.status(200).send(result)
})

app.get('/tarefas/:id', (req, res) => {
    const id = req.params.id

    const query = `
        SELECT * FROM tarefa WHERE id = ?
    `

    const stmt = database.prepare(query)
    const result = stmt.get(id)

    res.send(result)
})

app.put('/tarefas/:id', (req, res) => {
    const {nome, descricao, status} = req.body
    const id = Number(req.params.id)

    const query = `
        UPDATE tarefa
        SET nome = ?, descricao = ?, status = ?
        WHERE id = ?
    `

    const stmt = database.prepare(query)
    const result = stmt.run(nome, descricao, status, id)
    
    res.send({
        mensagem: "Tarefa atualizada com sucesso!",
        result
    })
})

app.post('/tarefas', (req, res) => {
    console.log(req.body)

    const {nome, descricao, status} = req.body

    const query = `
        INSERT INTO tarefa (nome, descricao, status) VALUES (?, ?, ?)
    `

    const stmt = database.prepare(query)
    const result = stmt.run(nome, descricao, status)

    res.status(200).send({
        mensagem: "Tarefa adicionada com sucesso!",
        result
    })
})

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const query = `
        DELETE FROM tarefa WHERE id = ?
    `

    const stmt = database.prepare(query)
    const result = stmt.run(id)

    res.send({
        mensagem: `Tarefa com o id ${id} removida com sucesso!`,
        result
    })
})

app.listen(port, () => {
    createTable()
    console.log('o servidor tá rodando')
})