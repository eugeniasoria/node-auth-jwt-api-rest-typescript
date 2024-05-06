import express from 'express'
import { login, registrer } from '../controllers/authController'

const router = express.Router()

router.post('/register', registrer)
router.post('/login', login)

export default router