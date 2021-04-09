import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CriarClienteDto } from './dto/criar-cliente.dto';
import { Cliente } from './interface/cliente.interface';

@Controller('irriga/v1/clientes')
export class ClientesController {
    constructor(private readonly clienteService: ClientesService) {}

    @Post()
    async criarCliente(@Body() criarClienteDto: CriarClienteDto): Promise<Cliente> {
        return this.clienteService.criarCliente(criarClienteDto)
    }
    
    @Get()
    async listaClientes(): Promise<Cliente[]> {
        return this.clienteService.listaClientes();
    }


}
