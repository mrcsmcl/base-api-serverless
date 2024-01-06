import { Schema, model } from 'mongoose';

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

export const Aula = model('Aula', aulaSchema);

// // aulaModel.ts
// import { Schema, model } from 'mongoose';

// const aulaSchema = new Schema({
//   titulo: {
//     type: String,
//     required: [true, 'Título é obrigatório'],
//   },
//   descricao: {
//     type: String,
//   },
//   urlCapa: {
//     type: String,
//     required: [true, 'URL da capa é obrigatória'],
//   },
//   urlVideo: {
//     type: String,
//     required: [true, 'URL do vídeo é obrigatória'],
//   },
//   urlArquivoComplementar: {
//     type: String,
//   },
// });

// export const Aula = model('Aula', aulaSchema);
