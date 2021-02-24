const Person = require('./models/Person')

const note = new Person({
    name: 'Juan Antonio Tello',
    number: '45454545',
    date: new Date()
})

note.save().then(result => {
    console.log('note saved!', result)
})

// Note.find({}).then(result => {
//     result.forEach(note => {
//         console.log(note);
//     })
//     mongoose.connection.close()
// })





