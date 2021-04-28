import { IsArray } from 'class-validator';
import { Produto } from 'src/produtos/interface/produtos.interface';
import { Cliente } from 'src/clientes/interface/cliente.interface';
export class CriarPedidoDto {
   _id: string; 
  pedido: string;
  @IsArray()
  cliente: Array<Cliente>;
  @IsArray()
  produto: Array<Produto>;

  quantidade: number;
}
