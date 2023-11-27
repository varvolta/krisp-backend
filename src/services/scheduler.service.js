import Candidate from '../models/candidate.model.js'

const queue = []
let processing = false

const process = async () => {
    if (queue.length) {
        processing = true
        const item = queue.shift()
        item.status = 'processing'
        const now = Date.now()

        // processing simulation for 50 ms
        setTimeout(async () => {
            item.status = 'completed'
            item.processTime = Date.now() - now

            const candidate = new Candidate(item)

            try {
                await candidate.save()
            } catch (error) {
                console.error(error)
            }

            processing = false
            await process()
        }, 50)
    }
}

export const scheduleCandidate = (candidate) => {
    candidate.status = 'pending'
    queue.push(candidate)
    if (!processing) {
        process()
    }
}