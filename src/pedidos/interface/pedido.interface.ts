import {Document} from 'mongoose';
import { Cliente } from 'src/clientes/interface/cliente.interface';

export interface Pedido extends Document {
    
    cliente: Array<Cliente>;
    
}