import Candidate from '../models/candidate.model.js'
import SocketService from './socket.service.js'

let processing = false

const process = async (candidate) => {
    candidate ||= await Candidate.findOne({ status: 'pending' })
    if (!candidate) {
        // check
        SocketService.instance?.io.sockets.emit('fetch-candidates')
        return
    }

    processing = true
    candidate.status = 'processing'

    try {
        await candidate.save()
    } catch (error) {
        console.error(error)
    }

    const now = Date.now()

    // processing simulation for 50 ms
    setTimeout(async () => {
        candidate.status = 'completed'
        candidate.processTime = Date.now() - now

        try {
            await candidate.save()
        } catch (error) {
            console.error(error)
        }

        processing = false
        await process()
    }, 50)
}

export const scheduleCandidate = async (data) => {
    data.status = 'pending'
    const candidate = new Candidate(data)

    try {
        await candidate.save()
        if (!processing) {
            process(candidate)
        }
    } catch (error) {
        console.error(error)
    }
}