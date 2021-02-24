const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
require('dotenv').config()

const url = process.env.MONGODB_URI

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(result => {
    console.log("Connected to MondoDB")
})
.catch(err => {
    console.log("Error connecting to MongoDB: ", err.message);
})

const noteSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 3 },
    number: { type: String, required: true, unique: true, minlength: 8 },
    date: { type: Date, required: true }
})
noteSchema.plugin(uniqueValidator)
    
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
})

mongoose.set('returnOriginal', false);

module.exports = mongoose.model('Person', noteSchema)