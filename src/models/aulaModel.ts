import { Schema, model } from 'mongoose';

// Schema de Progresso

const progressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

// Schema de Aula

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
  finalizados: {
    type: Number,
    default: 0,
  },
  mediaPerformance: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  progressPorUsuario: [progressSchema],
});

export const Aula = model('Aula', aulaSchema);
