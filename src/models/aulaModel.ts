// aulaModel.ts
import { Schema, model } from 'mongoose';

const progressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Certifique-se de ajustar se o modelo de usuário tiver um nome diferente
    required: true,
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  performance: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
});

const aulaSchema = new Schema({
  titulo: {
    type: String,
    required: [true, 'Título é obrigatório'],
  },
  descricao: {
    type: String,
  },
  urlCapa: {
    type: String,
    required: [true, 'URL da capa é obrigatória'],
  },
  urlVideo: {
    type: String,
    required: [true, 'URL do vídeo é obrigatória'],
  },
  urlArquivoComplementar: {
    type: String,
  },
  progressPorUsuario: [progressSchema], // Adicione um array para armazenar o progresso por usuário
});

export const Aula = model('Aula', aulaSchema);
