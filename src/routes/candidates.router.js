import { Router } from 'express'
import { create } from '../controllers/candidates.controller.js'

const router = Router()

router.post('/', create)

export default router