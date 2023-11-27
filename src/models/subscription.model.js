import { Schema, model } from 'mongoose'

const subscriptionSchema = new Schema({
    languages: {
        type: [String],
        required: true
    },
    experiences: {
        type: [String],
        required: true
    },
    positions: {
        type: [String],
        required: true
    },
    salaryFrom: {
        type: String,
        required: true
    },
    salaryTo: {
        type: String,
        required: true
    }
})

const Subscription = model('Subscription', subscriptionSchema)

export default Subscription