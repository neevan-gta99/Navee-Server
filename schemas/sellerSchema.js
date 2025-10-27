import mongoose from 'mongoose';
import {Counter} from './counterSchema.js'; // import counter model

const sellerSchema = new mongoose.Schema({
  sellerId: {
    type: String,
    unique: true,
  },

  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },

  businessName: { type: String, required: true },
  gstNumber: { type: String, required: true, uppercase: true },
  panNumber: { type: String, required: true, uppercase: true },
  businessType: { type: String, enum: ['individual', 'company', 'partnership'], required: true },

  pickupAddress: { type: String, required: true },
  pincode: { type: Number, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },

  accountHolder: { type: String, required: true },
  accountNumber: { type: String, required: true },
  ifsc: { type: String, required: true, uppercase: true },
  bankName: { type: String, required: true },

  courierPartner: { type: String, enum: ['delhivery', 'ekart', 'bluedart'], default: 'delhivery' },
  hasWarehouse: { type: Boolean, default: false },

  gstDoc: { type: String, default: '' },
  panDoc: { type: String, default: '' },

  createdAt: { type: Date, default: Date.now },
});

// 🔁 Pre-save hook to generate sellerId
sellerSchema.pre('save', async function (next) {
  if (this.sellerId) return next(); // already set

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: 'seller' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const padded = String(counter.seq).padStart(2, '0'); // e.g., 01, 02
    this.sellerId = `slr${padded}`;
    next();
  } catch (err) {
    next(err);
  }
});

const sellerDTO = mongoose.models.Seller || mongoose.model('Seller', sellerSchema);
export default sellerDTO;
