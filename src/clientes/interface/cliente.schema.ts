import * as mongoose from 'mongoose';

export const ClienteSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: {type: Number, unique: true },
    email: { type: String, unique: true}
})