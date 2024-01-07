export interface IAula {
    titulo: string;
    descricao: string;
    urlCapa: string;
    urlVideo: string;
    urlArquivoComplementar?: string;
  }
  
  export interface ICreateAula extends IAula {}
  
  export interface IUpdateAula {
    aulaId: string;
  }