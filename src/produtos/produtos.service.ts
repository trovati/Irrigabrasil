import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { Produto } from './interface/produtos.interface';

@Injectable()
export class ProdutosService {
    constructor( @InjectModel('Produto') private readonly produtoModel: Model<Produto>){}


    async criarProduto(criarProdutoDto:CriarProdutoDto): Promise<Produto> {
        const {description} = criarProdutoDto;

        const produtoEncontrado = await this.produtoModel.findOne({description}).exec()

        if(produtoEncontrado) {
            throw new BadRequestException(`Não é possível cadastrar ${description}, pois ele já existe`);
        }
        const produtoCriado = new this.produtoModel(criarProdutoDto);
        return await produtoCriado.save()
    }





}
