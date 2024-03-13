import express from 'express';
import { Booking } from '../controllers';
const router = express.Router();
router.post('/create', Booking.createBooking);
router.get('/all', Booking.getAllBookings);
router.get('/:id', Booking.getBookingById);
router.put('/:id', Booking.updateBooking);
router.delete('/:id', Booking.cancelBooking);
export default router;
