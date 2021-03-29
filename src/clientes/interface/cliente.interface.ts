import {Document} from 'mongoose';


export interface Cliente extends Document {
    id: number;
    name: string;
    address: string;
    phone: number;
    email: string;
}
