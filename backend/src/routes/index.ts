import express from 'express';

import resourceRouter from './resources';
const router = express.Router();


router.use("/resource", resourceRouter); 

export default router;