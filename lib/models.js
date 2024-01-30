import mongoose from 'mongoose';
const { Schema } = mongoose;

const guestSchema = new Schema({
  name: {
    type: String,
    required: true
    },
    attending: {
      type: String,
      required: true
    }
});

export const Guest = mongoose.models.Guest || mongoose.model('Guest', guestSchema);