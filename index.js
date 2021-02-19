const { request } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())


let persons = [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      },
      {
        "name": "Leonel Rodriguez",
        "number": "4444",
        "id": 5
      }
]

const generateId = () => {
    return Math.floor(Math.random()*75)

    // return persons.length > 0
    //     ? Math.max(...persons.map(n => n.id)) + 1
    //     : 1
}


app.get('/info', (request, response) => {
    const people = persons.length
    response.send(`<P>Phonebook has info for ${people} people</p><p>${new Date()}</>`)
})


app.get('/', (request, response) => {
    response.send("Hello Wrold !!!")
})


app.get('/api/persons', (request, response) => {
    response.json(persons)
})


app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    
    if(person){
        res.json(person)
    } else {
        res.status(400).end()
    }
})


app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!(body.name && body.number)) {
        return response.status(400).json({
            error: 'Name or Number is required!'
        })
    }

    const name = persons.map(p => p.name)
    const phone = persons.map(p => p.number)
    console.log(name, body.name, phone, body.number)
    if(name.includes(body.name) && phone.includes(body.number)) {
        return response.status(400).json({
            error: 'Name and Number must be unique!'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        date: new Date(),
        id: generateId()
    }

    persons = persons.concat(person)
    response.json(persons)
})


app.put('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const body = req.body
    persons = persons.map(p => p.id === id ? body : p)
    res.json(persons)
})


app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)

    persons = persons.filter(p => p.id !== id)
    res.json(persons)
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({
        error: 'Unknown endpoint!'
    })
}


app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server conecting on port ${PORT}`)
})