import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { Produto } from './interface/produtos.interface';
import { ProdutosService } from './produtos.service';

@Controller('api/v1/produtos')
export class ProdutosController {
  constructor(private readonly produtoService: ProdutosService) {}

  @Post()
  async criarProduto(
    @Body() criarProdutoDto: CriarProdutoDto,
  ): Promise<Produto> {
    return this.produtoService.criarProduto(criarProdutoDto);
  }

  @Get()
  async listaProdutos(): Promise<Produto[]> {
    return this.produtoService.listaProdutos();
  }

  @Get('/:description')
  async pesquisarProduto(
    @Param('description') description: string,
  ): Promise<Produto[] | Produto> {
    return this.produtoService.pesquisarProduto(description);
  }
  @Put('/:description')
  async atualizarProduto(
    @Body() criarProdutoDto: CriarProdutoDto,
    @Param('description') description: string,
  ): Promise<void> {
    await this.produtoService.atualizarProduto(description, criarProdutoDto);
  }
  @Delete('/:description')
  async deletarProduto(@Param('description') description: string): Promise<void> {
    await this.produtoService.deletarProduto(description);
  }
}
