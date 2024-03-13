import sendMail from './mailSender';
import { createGraph, dijkstra } from './graph';

export const BookingConfirmation = {
  sendMail,
};

export const Graph = {
  createGraph,
  dijkstra,
};
