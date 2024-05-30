import express from 'express';

import { getuserdetails ,register, login } from "../controller/usercontroller.js";



const router = express.Router()



router.get('/user-details', getuserdetails)
router.post('/register', register)

router.post('/login',login)

export default router;
