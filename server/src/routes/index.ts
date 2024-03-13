import express from 'express';
import cabRoutes from './cab';
import bookingRoutes from './booking';
import pathRoutes from './path';
const router = express.Router();

router.use('/cab', cabRoutes);
router.use('/booking', bookingRoutes);
router.use('/path', pathRoutes);

export default router;
