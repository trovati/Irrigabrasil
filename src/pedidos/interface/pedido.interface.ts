import {Document} from 'mongoose';
import { Cliente } from 'src/clientes/interface/cliente.interface';
import { Produto } from 'src/produtos/interface/produtos.interface';

export interface Pedido extends Document {
    
    
    cliente: Array<Cliente>;
    quantidade: number;
    produto: Array<Produto>;
}