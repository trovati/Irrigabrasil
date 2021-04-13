import {Document} from 'mongoose';


export interface Cliente extends Document {
    name: string;
    address: string;
    phone: number;
    email: string;
}
