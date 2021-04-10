import {Document} from 'mongoose';

export interface Produto extends Document {
    code: number;
    description: string;
    unitPrice: number;
}