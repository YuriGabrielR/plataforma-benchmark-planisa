import { useQuery } from "@tanstack/react-query"
import { api } from "../api/apiConfig"
import { rotasApi } from "../api/rotasApi"
import { IBenchmarkDTO } from "../model/IBenchmarkDTO"


export const useBenchmarkListarPorId = (id: string | undefined) => {
  const endPoint = async (): Promise<IBenchmarkDTO> => {
    const response = await api().get(rotasApi.listarBenchmarkPorId(id!))
    return response.data
  }

  const { data, isLoading } = useQuery({
    queryKey: ['benchmark-por-id', id],
    queryFn: endPoint,
    enabled: !!id,
  })

  return { data, isLoading }
}
