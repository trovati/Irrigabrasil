import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { ClienteSchema } from './interface/cliente.schema';

@Module({
    imports: [
      MongooseModule.forFeature([{name: 'Cliente', schema: ClienteSchema }])
    ],
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [ClientesService]
})
export class ClientesModule {}
