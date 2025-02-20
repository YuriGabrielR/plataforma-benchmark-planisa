import { RouteObject } from "react-router-dom";
import { BenchmarkDetalhes } from "../pages/Benchmark/BenchmarkDetalhes.pagina";
import { BenchmarkListagem } from "../pages/Benchmark/BenchmarkListagem.pagina";
import { Home } from "../pages/Home/Home.pagina";
import { rotasUrls } from "./rotasUrls";


export const rotasPagina: RouteObject[] = [
  {
    path:  rotasUrls.home,
    element: <Home />,
  },

  {
    path:  rotasUrls.benchmarkListagem,
    element: <BenchmarkListagem />,
  },

  {
    path: rotasUrls.benchmarkPorId(':idBenchmark'),
    element: <BenchmarkDetalhes />,
  },
]
