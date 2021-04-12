import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { Produto } from './interface/produtos.interface';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel('Produto') private readonly produtoModel: Model<Produto>,
  ) {}

  async criarProduto(criarProdutoDto: CriarProdutoDto): Promise<Produto> {
    const { description } = criarProdutoDto;

    const produtoEncontrado = await this.produtoModel
      .findOne({ description })
      .exec();

    if (produtoEncontrado) {
      throw new BadRequestException(
        `Não é possível cadastrar ${description}, pois ele já existe`,
      );
    }
    const produtoCriado = new this.produtoModel(criarProdutoDto);
    return await produtoCriado.save();
  }

  async atualizarProduto(
    description: string,
    criarProdutoDto: CriarProdutoDto,
  ): Promise<Produto> {
    const produtoEncontrado = await this.produtoModel
      .findOne({ description })
      .exec();
    if (!produtoEncontrado) {
      throw new NotFoundException(`o item ${description} não foi encontrado`);
    }
    return await this.produtoModel
      .findOneAndUpdate({ description }, { $set: criarProdutoDto })
      .exec();
  }

  async listaProdutos(): Promise<Produto[]> {
    return this.produtoModel.find().exec();
  }

  // Consultar um Cliente

  async pesquisarProduto(description: string): Promise<Produto> {
    const produtoEncontrado = await this.produtoModel.findOne({ description }).exec();
    if (!produtoEncontrado) {
      throw new NotFoundException(`Item ${description} não encontrado`);
    }
    return produtoEncontrado;
  }

  //Deletar Produto

  async deletarProduto(description): Promise<any> {
    const produtoEncontrado = await this.produtoModel.findOne({ description }).exec();
    if (!produtoEncontrado) {
      throw new NotFoundException(
        `Não foi possível deletar o item ${description}, pois não se encontra no banco de dados`,
      );
    }
    return this.produtoModel.deleteOne({ description }).exec();
  }
}
