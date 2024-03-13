import Booking from '../models/booking';
import { calculateShortestTime } from './path';

export const createBooking = async (req, res) => {
  try {
    const { source, destination, email, cab, startTime } = req.body;

    const estimatedTime = await calculateShortestTime(source, destination);
    const bookingPrice = estimatedTime.time * cab?.price;

    // TODO: complete this function
    // Create the booking in the database
    // const newBooking = new Booking({
    //   source,
    //   destination,
    //   email,
    //   cab: cab,
    //   bookingPrice: bookingPrice,
    //   status: 'scheduled',
    // });

    // await newBooking.save();

    // update cab time slots and status
    // await Cab.findByIdAndUpdate(cab._id, {
    //   $set: {
    //     busyDuration: new Date(
    //       new Date().getTime() + estimatedTime.time * 60000
    //     ),
    //   },
    // });

    // send mail
    // res.status(201).json(newBooking);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not create a new booking.' });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve bookings.' });
  }
};

export const getBookingById = async (req, res) => {
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

export const updateBooking = async (req, res) => {
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

export const cancelBooking = async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        $set: { status: 'cancelled' },
      },
      { new: true }
    );

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the booking.' });
  }
};
