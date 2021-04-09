import * as mongoose from 'mongoose';

export const ProdutoSchema = new mongoose.Schema({
  code: { type: Number, unique: true },
  description: { type: String, unique: true },
  unitPrice: Number,
});
