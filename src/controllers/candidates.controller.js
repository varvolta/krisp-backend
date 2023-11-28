import Subscription from '../models/subscription.model.js'
import { scheduleCandidate } from '../services/scheduler.service.js'
import { successResponse } from '../utils/response.util.js'

export const createMany = (req, res) => {
    const { candidates } = req.body

    candidates.forEach(candidate => {
        scheduleCandidate(candidate)
    })

    successResponse(res)
}

export const getBySubscriptionId = async (req, res) => {
    const { id } = req.params

    const subscription = await Subscription.findById(id)
    const candidates = await subscription.findCandidates()

    successResponse(res, candidates)
}