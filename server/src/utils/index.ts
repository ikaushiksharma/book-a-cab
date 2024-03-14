import sendMail from './mailSender';
import { createGraph, dijkstra } from './graph';
import { message, error } from './print';
export const BookingConfirmation = {
  sendMail,
};

export const Graph = {
  createGraph,
  dijkstra,
};

export const print = {
  message,
  error,
};
