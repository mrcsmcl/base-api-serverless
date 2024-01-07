import { Aula } from '@/models/aulaModel';

const getIndicators = async (request: any, h: any) => {
  try {
    const { orderBy } = request.query;

    let sortOption = {};

    if (orderBy) {
      if (orderBy === 'performance') {
        sortOption = { mediaPerformance: -1 };
      }
      else if (orderBy === 'totalFinalizados') {
        sortOption = { finalizados: -1 };
      }
    }

    const aulas = await Aula.find().sort(sortOption);

    const indicators = aulas.map((aula) => {
      const totalFinalizados = aula.finalizados;
      const mediaPerformance = aula.mediaPerformance;

      return {
        aulaId: aula._id,
        nome: aula.titulo,
        totalFinalizados,
        mediaPerformance,
      };
    });

    return indicators;
  } catch (error) {
    console.error('Erro ao buscar indicadores de aulas:', error);
    return h.response({ error: 'Erro ao buscar indicadores de aulas' }).code(500);
  }
};

export { getIndicators };
