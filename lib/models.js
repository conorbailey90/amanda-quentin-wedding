import mongoose from 'mongoose';
const { Schema } = mongoose;

const guestSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    attendingCeremony: {
      type: Boolean,
      required: true
    },
    meal: {
      type: String
    },
    attendingBrunch: {
      type: Boolean,
      required: true
    },
    guests: [
      new Schema({
        name: String,
        menu: String,
        meal: String,
        attendance: String,
        hasAllergy: String,
        allergyDesc: String

      })
    ],
    hasAllergy: {
      type: Boolean,
      required: true
    },
    allergyDesc: {
      type: String
    },
    songChoice: {
      type: String
    }
});

export const Guest = mongoose.models.Guest || mongoose.model('Guest', guestSchema);