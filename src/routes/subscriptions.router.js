import { Router } from 'express'
import { getAll, create, deleteById } from '../controllers/subscriptions.controller.js'

const router = Router()

router.get('/', getAll)
router.post('/', create)
router.delete('/', deleteById)

export default router