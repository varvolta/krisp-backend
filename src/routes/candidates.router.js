import { Router } from 'express'
import { createMany, getBySubscriptionId } from '../controllers/candidates.controller.js'

const router = Router()

router.get('/:id', getBySubscriptionId)
router.post('/', createMany)

export default router