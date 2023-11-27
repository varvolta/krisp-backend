import Subscription from '../models/subscription.model.js'
import { failureResponse, successResponse } from '../utils/response.util.js'

export const getAll = async (req, res) => {
    const subscriptions = await Subscription.find()
    successResponse(res, subscriptions)
}

export const create = async (req, res) => {
    const subscription = new Subscription(req.body)
    try {
        await subscription.save()
        successResponse(res, subscription)
    } catch (error) {
        failureResponse(res)
    }
}

export const deleteOne = async (req, res) => {
    const { id } = req.body
    try {
        await Subscription.findByIdAndDelete(id)
        successResponse(res)
    } catch (error) {
        failureResponse(res)
    }
}