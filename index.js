const { request } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/Person')

const app = express()

app.use(express.json())
// app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))


app.get('/info', (request, response) => {
    Person.find({}).then(persons => {
        const people = persons.length
        response.send(`
            <P>Phonebook has info for ${people} people</p>
            <p>${new Date()}</>
        `)
    })
    .catch(() => {
        response.send(`
            <P>Not have Phonebook yet!</p>
            <p>${new Date()}</>
        `)
    })
})


app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})


app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id

    Person.findById(id).then(person => {
        res.json(person)
    })
    .catch(error => {
        res.status(400).end()
    })
})


app.post('/api/persons', (request, response) => {
    const body = request.body

    const newPerson = new Person ({
        name: body.name,
        number: body.number,
        date: new Date()
    })

    newPerson.save()
        .then(person => {
            response.json(person)
        })
        .catch(error => {
            return response.status(404).json({
                error: error.message
            })                              
        })
})


app.put('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const body = request.body

    Person.findByIdAndUpdate(id, 
        body,
        { runValidators: true, context: 'query' }
    )
    .then(person => {
        response.json(person)
    })
    .catch(error => {
        return response.status(400).json({
            error: error.message
        })                              
    })
})


app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id

    Person.findOneAndDelete(id).then(() => {
        res.status(200).end()
    })
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({
        error: 'Unknown endpoint!'
    })
}


app.use(unknownEndpoint)


const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server conecting on port ${PORT}`)
})