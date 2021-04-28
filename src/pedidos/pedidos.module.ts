import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoSchema } from './interface/pedido.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pedido', schema: PedidoSchema }]),
  ],
  providers: [PedidosService],
  controllers: [PedidosController],
  exports: [PedidosService],
})
export class PedidosModule {}


