import { useMutation } from '@tanstack/react-query'
import { rotasApi } from '../api/rotasApi'
import { api, queryClient } from '../api/apiConfig'
import { toast } from 'react-toastify'

export const useDeletarBenchmark = () => {
    const { mutate, isPending: isLoading } = useMutation({
      mutationFn: endPoint,
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ['benchmarks-listagem'] })
  
        toast.success('Benchmark deletado com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      },
      onError: () => {

        toast.error('Ocorreu um erro ao deletar o benchmark.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      },
    })

  async function endPoint(id: string): Promise<void> {
    await api().delete(rotasApi.deletarBenchmark(id))
  }

  return { mutate, isLoading }
}
