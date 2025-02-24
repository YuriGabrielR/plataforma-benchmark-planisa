import { useQuery } from "@tanstack/react-query"
import { IBenchmarkDTO } from "../model/IBenchmarkDTO"
import { rotasApi } from "../api/rotasApi"
import { api } from "../api/apiConfig"

export const useBenchmarkListar = () => {
    const { data } = useQuery({
      queryKey: ['benchmarks-listagem'],
      queryFn: async () => await endPoint(),
    })
  
    return { data }
  }


  async function endPoint(): Promise<IBenchmarkDTO[]> {
    const { data } = await api().get(rotasApi.listarBenchmarks)
    return data
  }