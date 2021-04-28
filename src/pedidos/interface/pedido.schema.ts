import * as mongoose from 'mongoose';

export const PedidoSchema = new mongoose.Schema({
    pedido: {type: String, unique: true},
    cliente: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente"
    }],
    produto: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produto"
    }]
    
});
