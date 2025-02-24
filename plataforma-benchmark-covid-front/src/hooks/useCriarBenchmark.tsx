import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { api } from '../api/apiConfig'
import { queryClient } from '../api/apiConfig'
import { rotasApi } from '../api/rotasApi'
import { toast } from 'react-toastify'

export const useCriarBenchmark = () => {
    
    const benchmarkSchema = Yup.object({
        nome: Yup.string().required('O Campo *Nome* é obrigatório.'),
        pais1: Yup.string().required('O Campo *Pais1* é obrigatório.'),
        pais2: Yup.string().required('O Campo *Pais2* é obrigatório.'),
        dataInicio: Yup.string()
          .required('O Campo *Data Início* é obrigatório.')
          .matches(
            /^\d{4}-\d{2}-\d{2}$/, 
            'O formato da *Data Início* deve ser YYYY-MM-DD.'
          )
          .test('dataInicioValida', 'A *Data Início* não pode ser maior que a *Data Fim*.', function (value) {
            const { dataFim } = this.parent;
            return !dataFim || !value || value <= dataFim;
          }),
        dataFim: Yup.string()
          .required('O Campo *Data Fim* é obrigatório.')
          .matches(
            /^\d{4}-\d{2}-\d{2}$/, 
            'O formato da *Data Fim* deve ser YYYY-MM-DD.'
          ),
      });
      

  type BenchmarkCriarSchema = Yup.InferType<typeof benchmarkSchema>

  const BenchmarkCriarSchema = useForm<BenchmarkCriarSchema>({
    resolver: yupResolver(benchmarkSchema),
    reValidateMode: 'onChange',
  })
  async function endPoint(data: BenchmarkCriarSchema) {
    const result = await api().post(rotasApi.criarBenchmark, data)
    return result.data.data
  }

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: endPoint,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['benchmarks-listagem'] })

      toast.success('Benchmark criado com sucesso!', {
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

  return { mutate, isLoading, BenchmarkCriarSchema }
}
