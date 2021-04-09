import {Document} from 'mongoose';

export interface Produto extends Document {
    code: number;
    descripton: string;
    unitPrice: number;
}