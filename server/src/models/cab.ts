import mongoose from 'mongoose';

const cabSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
});

const Cab = mongoose.model('Cab', cabSchema);

export default Cab;
