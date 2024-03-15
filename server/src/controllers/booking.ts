import Cab from '../models/cab';
import Booking from '../models/booking';
import { calculateShortestTime } from './path';
import { Request, Response } from 'express';
import sendMail from '../utils/mailSender';
import { print } from '../utils';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { source, destination, email, cabId } = req.body;
    const cab = await Cab.findById(cabId);
    const estimatedTime = await calculateShortestTime(source, destination);
    const price = estimatedTime.time * cab.price;
    let startTime = new Date();
    const endTime = new Date(startTime.getTime() + estimatedTime.time * 60000);
    // save booking into the database
    const newBooking = await Booking.create({
      source,
      destination,
      email,
      cab: cabId,
      startTime,
      endTime: endTime,
      price,
    });

    // update cab time slots and status
    cab.availableFrom = newBooking.endTime;
    cab.bookings.push(newBooking._id);
    await cab.save();

    // send mail
    await sendMail({
      email,
      source,
      destination,
      startTime: startTime.toLocaleString(undefined, {
        timeZone: 'Asia/Kolkata',
      }),
      endTime: newBooking.endTime.toLocaleString(undefined, {
        timeZone: 'Asia/Kolkata',
      }),
      price,
    });
    res.status(201).json(newBooking);
  } catch (error) {
    print.error(error);
    res.status(500).json({ error: 'Could not create a new booking.' });
  }
};

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().populate('cab');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve bookings.' });
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found.' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the booking.' });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found.' });
    }
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the booking.' });
  }
};

export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const updatedBooking = await Booking.findByIdAndDelete(req.params.id);

    await Cab.findByIdAndUpdate(updatedBooking.cab._id, {
      $pull: {
        bookings: req.params.id,
      },
      availableFrom: null,
    });

    res.status(200).json({ message: 'Booking cancelled successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the booking.' });
  }
};
