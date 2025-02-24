import express from 'express';
import { getResponse } from '../controllers/keywordController.js';

const router = express.Router();


router.post('/getresponse', getResponse)

export default router;