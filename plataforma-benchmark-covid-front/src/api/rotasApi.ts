export const rotasApi = {
    listarBenchmarks:'/api/benchmarks-covid', 
    criarBenchmark: '/api/benchmarks-covid/criar', 
    listarBenchmarkPorId: (id: string) => `/api/benchmarks-covid/${id}`,
    deletarBenchmark: (id: string) => `/api/benchmarks-covid/${id}`,

}