import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CriarClienteDto } from './dto/criar-cliente.dto';
import { Cliente } from './interface/cliente.interface';

@Controller('api/v1/clientes')
export class ClientesController {
    constructor(private readonly clienteService: ClientesService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async criarCliente(@Body() criarClienteDto: CriarClienteDto): Promise<Cliente> {
        return this.clienteService.criarCliente(criarClienteDto)
    }
    
    @Get()
    async listaClientes(): Promise<Cliente[]> {
        return this.clienteService.listaClientes();
    }

    @Get('/:_id')
    async pesquisarCliente(@Param('_id') _id:string): Promise<Cliente[] | Cliente> {
        return this.clienteService.pesquisarCliente(_id)
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async atualizarCliente(@Body() criarClienteDto: CriarClienteDto, @Param('_id') _id:string): Promise<void> {
        await this.clienteService.atualizarCliente(_id, criarClienteDto);
    }

    @Delete('/:_id')
    @UsePipes(ValidationPipe)
    async deletarCliente(@Param('_id') _id:string): Promise<void>{
        await this.clienteService.deletarCliente(_id)
    }

    


}
