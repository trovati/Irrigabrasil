import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:salmos23@irriga.krzdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    ClientesModule,
    ProdutosModule,
    PedidosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
