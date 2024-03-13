import mongoose from 'mongoose';

const pathSchema = new mongoose.Schema({
  source: {
    type: String,
    required: [true, 'Source is required'],
  },
  destination: {
    type: String,
    required: [true, 'Destination is required'],
  },
  timeInMinutes: {
    type: Number,
    required: [true, 'Time is required'],
  },
});

const Path = mongoose.model('Path', pathSchema);

export default Path;
