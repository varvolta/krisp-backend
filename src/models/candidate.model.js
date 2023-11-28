import { Schema, model } from 'mongoose'

const candidateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    languages: {
        type: [String],
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salaryFrom: {
        type: Number,
        required: true
    },
    salaryTo: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now
    },
    status: {
        type: String,
        required: true
    },
    processTime: String
})

const Candidate = model('Candidate', candidateSchema)

export default Candidate