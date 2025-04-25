import express from 'express';

import resourceRouter from './resources';
const router = express.Router();

// Import or define resourceRouter

router.use("/resource", resourceRouter); 

export default router;