import express from 'express';
import { createReading, latestReading, getLatestReading } from '../controllers/readings.js'
const router = express.Router();



router.post('/', createReading);
router.put('/', latestReading);
router.get('/latest', latestReading);




export default router;
