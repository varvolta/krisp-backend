import { Router } from 'express'
import { getAll, create, deleteOne } from '../controllers/subscriptions.controller.js'

const router = Router()

router.get('/', getAll)
router.post('/', create)
router.delete('/', deleteOne)

export default router