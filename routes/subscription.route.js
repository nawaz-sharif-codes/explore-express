import {Router} from 'express'
import { fetchSubscription } from '../controllers/subscription.controller.js'

const router = Router()

router.get('/:id',fetchSubscription)

export default router