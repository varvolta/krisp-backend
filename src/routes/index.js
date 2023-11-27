import { Router } from 'express'

import candidates from './candidates.router.js'
import subscriptions from './subscriptions.router.js'

const router = Router()

router.use('/candidates', candidates)
router.use('/subscriptions', subscriptions)

export default router