export interface IAula {
    titulo: string;
    descricao: string;
    urlCapa: string;
    urlVideo: string;
    urlArquivoComplementar?: string;
    // Adicione outros campos conforme necessário
  }
  
  export interface ICreateAula extends IAula {}
  
  export interface IUpdateAula {
    aulaId: string;
    // Adicione campos específicos para atualização, como novos títulos, descrições, etc.
  }
  