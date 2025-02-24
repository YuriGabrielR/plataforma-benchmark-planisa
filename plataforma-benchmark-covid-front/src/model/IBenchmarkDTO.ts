import { IResultadoDTO } from "./ResultadoDTO"

export interface IBenchmarkDTO {
    id: string
    nome: string
    pais1: string
    pais2: string
    dataInicio: Date
    dataFim: Date
    resultado: IResultadoDTO

  }