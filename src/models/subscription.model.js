import { Schema, model } from 'mongoose'
import Candidate from './candidate.model.js'

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
    }
},
    {
        methods: {
            findCandidates() {
                return Candidate.find({
                    languages: { $all: this.languages },
                    experience: { $in: this.experiences },
                    position: { $in: this.positions },
                    salaryFrom: { $gte: this.salaryFrom },
                    salaryTo: { $lte: this.salaryTo }
                })
            }
        }
    })

const Subscription = model('Subscription', subscriptionSchema)

export default Subscription