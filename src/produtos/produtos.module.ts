import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { ProdutoSchema } from './interface/produto.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Produto', schema: ProdutoSchema }]),
  ],
  providers: [ProdutosService],
  controllers: [ProdutosController],
  exports: [ProdutosService]
})
export class ProdutosModule {}
