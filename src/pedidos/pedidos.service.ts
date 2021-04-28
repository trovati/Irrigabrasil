import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarPedidoDto } from './dto/criar-pedido.dto';
import { Pedido } from './interface/pedido.interface';

@Injectable()
export class PedidosService {
  constructor(
    @InjectModel('Pedido') private readonly pedidoModel: Model<Pedido>,
  ) {}

  async criarPedido(criarPedidoDto: CriarPedidoDto): Promise<Pedido> {
    const { pedido } = criarPedidoDto;

    const pedidoEncontrado = await this.pedidoModel.findOne({ pedido }).exec();

    if (pedidoEncontrado) {
      throw new BadRequestException(`Pedido já cadastrado`);
    }
    const pedidoCriado = new this.pedidoModel(criarPedidoDto);
    return await pedidoCriado.save();
  }

  async atualizarPedido(_id: string,criarPedidoDto: CriarPedidoDto,): Promise<Pedido> {
    const pedidoEncontrado = await this.pedidoModel.findOne({ _id }).exec();

    if (!pedidoEncontrado) {
      throw new NotFoundException(`Pedido ${_id} não encontrado`);
    }
    return await this.pedidoModel.findOneAndUpdate({ _id }, { $set: criarPedidoDto }).exec();
  }

  async listarPedidos(): Promise<Pedido[]> {
    return this.pedidoModel.find().exec();
  }

  async pesquisarPedido(_id: string): Promise<Pedido> {
    const pedidoEncontrado = await this.pedidoModel.findOne({ _id }).exec();
    if (!pedidoEncontrado) {
      throw new NotFoundException(`Pedido ${_id} não encontrado`);
    }
    return pedidoEncontrado;
  }

  async deletarPedido(_id): Promise<any> {
    const pedidoEncontrado = await this.pedidoModel.findOne({ _id }).exec();
    if (!pedidoEncontrado) {
      throw new NotFoundException(
        `Não foi possível deletar o pedido ${_id}, pois não se encontra no banco de dados`,
      );
    }
    return this.pedidoModel.deleteOne({ _id }).exec();
  }
}
