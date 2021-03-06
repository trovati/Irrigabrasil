/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CriarClienteDto } from './dto/criar-cliente.dto';
import { Cliente } from './interface/cliente.interface';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel('Cliente') private readonly clienteModel: Model<Cliente>,
  ) {}
// Criar um Cliente
  async criarCliente(criarClienteDto: CriarClienteDto): Promise<Cliente> {
    const { name } = criarClienteDto;

    const clienteEncontrado = await this.clienteModel.findOne({ name }).exec();

    if (clienteEncontrado) {
      throw new BadRequestException(`Cliente ${name} já cadastrado`);
    }
    const clienteCriado = new this.clienteModel(criarClienteDto);
    return await clienteCriado.save();
  }
// Atualizar um cliente existente
  async atualizarCliente(_id: string, criarClienteDto: CriarClienteDto): Promise<Cliente> {
    const clienteEncontrado = await this.clienteModel.findOne({_id}).exec();

    if(!clienteEncontrado){
      throw new NotFoundException(`Cliente ${_id} não foi encontrado`)
    }
    return await this.clienteModel.findOneAndUpdate({_id}, {$set:criarClienteDto},).exec();
  }
  // Lista de Todos os Clientes

  async listaClientes(): Promise<Cliente[]> {
    return this.clienteModel.find().exec();
  }

  // Consultar um Cliente

  async pesquisarCliente(_id:string): Promise<Cliente>{
    const clienteEncontrado = await this.clienteModel.findOne({_id}).exec();
    if(!clienteEncontrado){
      throw new NotFoundException(`Cliente ${_id} não encontrado`);
    }
    return clienteEncontrado;
  }

  //Deletar Cliente

  async deletarCliente(_id): Promise<any> {
    const clienteEncontrado = await this.clienteModel.findOne({_id}).exec();
    if (!clienteEncontrado){
      throw new NotFoundException(`Não foi possível deletar o cliente ${_id}, pois não se encontra no banco de dados`)
    }
    return this.clienteModel.deleteOne({_id}).exec();
  }



}
