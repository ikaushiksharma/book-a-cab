import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      enum: ['A', 'B', 'C', 'D', 'E', 'F'],
      required: [true, 'Source is required'],
    },
    destination: {
      type: String,
      enum: ['A', 'B', 'C', 'D', 'E', 'F'],
      required: [true, 'Destination is required'],
    },
    email: { type: String, required: [true, 'Email is required'] },
    cab: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cab',
      required: [true, 'Cab is required'],
    },
    startTime: {
      type: Date,
      default: Date.now,
      required: [true, 'Start time is required'],
    },
    endTime: {
      type: Date,
      required: [true, 'End time is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    status: {
      type: String,
      default: 'scheduled',
      enum: ['scheduled', 'ongoing', 'expired', 'completed', 'cancelled'],
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
