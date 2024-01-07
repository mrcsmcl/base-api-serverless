// src/models/photoModel.ts
import { Schema, model } from 'mongoose';

const photoSchema = new Schema({
  source: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
});

export const Photo = model('Photo', photoSchema);
