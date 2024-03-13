import { createPath, shortestPath, getAllPaths } from './path';
import {
  createCab,
  getCabById,
  getAllCabs,
  deleteCab,
  updateCab,
  getAvailableCabs,
} from './cab';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  cancelBooking,
} from './booking';
export const Path = {
  createPath,
  shortestPath,
  getAllPaths,
};

export const Booking = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  cancelBooking,
};

export const Cab = {
  createCab,
  getCabById,
  getAllCabs,
  deleteCab,
  updateCab,
  getAvailableCabs,
};
