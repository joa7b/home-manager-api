import * as mongoose from 'mongoose';


export const HouseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ownerId: { type: Number, required: true },
    layers: { type: Array, required: true },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  },
);