export class ContratoDTO {
    id: number;
    identificador: string;
    valor: number;
    nombreContratante: string;
    documentoContratante: string;
    nombreContratantista: string;
    documentoContratantista: string;
    fechaInicial: Date;
    fechaFinal: Date;

    constructor() {
        this.id = 0;
        this.identificador = '';
        this.valor = 0;
        this.nombreContratante = '';
        this.documentoContratante = '';
        this.nombreContratantista = '';
        this.documentoContratantista = '';
        this.fechaInicial = new Date();
        this.fechaFinal = new Date();
    }
  }