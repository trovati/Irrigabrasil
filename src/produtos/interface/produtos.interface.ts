import {Document} from 'mongoose';

export interface Produto extends Document {
    id: number;
    descripton: string;
    price: number;
}