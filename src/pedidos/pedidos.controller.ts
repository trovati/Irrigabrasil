import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarPedidoDto } from './dto/criar-pedido.dto';
import { Pedido } from './interface/pedido.interface';
import { PedidosService } from './pedidos.service';

@Controller('api/v1/pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarPedido(@Body() criarPedidoDto: CriarPedidoDto): Promise<Pedido> {
    return await this.pedidosService.criarPedido(criarPedidoDto);
  }

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async atualizarPedido(
    @Body() criarPedidoDto: CriarPedidoDto,
    @Param('_id') _id: string,
  ): Promise<Pedido> {
    return await this.pedidosService.atualizarPedido(_id, criarPedidoDto);
  }

  @Get()
  async listarPedidos(): Promise<Pedido[]> {
    return this.pedidosService.listarPedidos();
  }

  @Get('/:_id')
  async pesquisarPedido(@Param('_id') _id: string): Promise<Pedido[] | Pedido> {
    return this.pedidosService.pesquisarPedido(_id);
  }

  @Delete('/:_id')
  @UsePipes(ValidationPipe)
  async deletarPedido(
    @Param('_id') _id: string,
  ): Promise<void> {
    await this.pedidosService.deletarPedido(_id);
  }
}
