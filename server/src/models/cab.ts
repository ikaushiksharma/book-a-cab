import mongoose from 'mongoose';

const cabSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], unique: true },
  price: { type: Number, required: [true, 'Price is required'] },
  availableFrom: { type: Date, default: null, required: false },
  image: { type: String, required: false },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
});

const Cab = mongoose.model('Cab', cabSchema);

export default Cab;
