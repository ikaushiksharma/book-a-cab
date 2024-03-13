import express from 'express';
import { Cab } from '../controllers';
const router = express.Router();

router.get('/all', Cab.getAllCabs);
router.get('/available-cabs', Cab.getAvailableCabs);
router.get('/:id', Cab.getCabById);
router.post('/create', Cab.createCab);
router.put('/:id', Cab.updateCab);
router.delete('/:id', Cab.deleteCab);
export default router;
