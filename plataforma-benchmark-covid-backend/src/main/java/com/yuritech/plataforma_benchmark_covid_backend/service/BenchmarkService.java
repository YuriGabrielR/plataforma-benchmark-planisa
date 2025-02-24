package com.yuritech.plataforma_benchmark_covid_backend.service;


import com.yuritech.plataforma_benchmark_covid_backend.dtos.BenchmarkDTO;
import com.yuritech.plataforma_benchmark_covid_backend.dtos.ResultadoDTO;
import com.yuritech.plataforma_benchmark_covid_backend.entities.BenchmarkEntity;
import com.yuritech.plataforma_benchmark_covid_backend.entities.ResultadoEntity;
import com.yuritech.plataforma_benchmark_covid_backend.infra.client.CovidApiClientResponseDTO;
import com.yuritech.plataforma_benchmark_covid_backend.infra.client.CovidApiClientService;
import com.yuritech.plataforma_benchmark_covid_backend.repositories.BenchmarkRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
public class BenchmarkService {

    private BenchmarkRepository benchmarkRepository;
    private CovidApiClientService covidApiClientService;
    private ResultadoService resultadoService;

    public BenchmarkService(BenchmarkRepository benchmarkRepository, CovidApiClientService covidApiClientService, ResultadoService resultadoService) {
        this.benchmarkRepository = benchmarkRepository;
        this.covidApiClientService = covidApiClientService;
        this.resultadoService = resultadoService;
    }

    @Transactional
    public BenchmarkDTO criarBenchmark(BenchmarkDTO data) {
        if (data.getDataInicio().isAfter(data.getDataFim())) {
            throw new IllegalArgumentException("A data de início não pode ser maior que a data final");
        }

        BenchmarkEntity benchmarkEntity = new BenchmarkEntity();
        benchmarkEntity.setNome(data.getNome());
        benchmarkEntity.setPais1(data.getPais1());
        benchmarkEntity.setPais2(data.getPais2());
        benchmarkEntity.setDataInicio(data.getDataInicio());
        benchmarkEntity.setDataFim(data.getDataFim());

        benchmarkEntity = benchmarkRepository.save(benchmarkEntity);

        System.out.println(data.getPais1());
        CovidApiClientResponseDTO pais1DadosCovid = covidApiClientService.buscarDadosCovid(data.getPais1());
        CovidApiClientResponseDTO pais2DadosCovid = covidApiClientService.buscarDadosCovid(data.getPais2());

        ResultadoEntity resultado = resultadoService.criarResultado(pais1DadosCovid, pais2DadosCovid, benchmarkEntity);
        benchmarkEntity.setResultado(resultado);

        benchmarkRepository.save(benchmarkEntity);

        return data;
    }

    public List<BenchmarkDTO> listarBenchmarks() {
        var listagemBenchmarks = benchmarkRepository.findAll();

        return listagemBenchmarks.stream().map(benchmark ->
                new BenchmarkDTO(
                        benchmark.getId(),
                        benchmark.getNome(),
                        benchmark.getPais1(),
                        benchmark.getPais2(),
                        benchmark.getDataInicio(),
                        benchmark.getDataFim(),
                        benchmark.getResultado() != null ?
                                new ResultadoDTO(
                                        benchmark.getResultado().getPaisUmCasos(),
                                        benchmark.getResultado().getPaisDoisCasos(),
                                        benchmark.getResultado().getPaisUmMortes(),
                                        benchmark.getResultado().getPaisDoisMortes(),
                                        benchmark.getResultado().getPaisUmTaxaLetalidade(),
                                        benchmark.getResultado().getPaisDoisTaxaLetalidade()
                                ) : null
                )
        ).toList();
    }

    public BenchmarkDTO listarBenchmarkPorId(String id) {
        UUID idBenchmark = UUID.fromString(id);

        var benchmarkExiste = benchmarkRepository
                .findById(idBenchmark)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado"));

        var benchmark = new BenchmarkDTO(
                benchmarkExiste.getId(),
                benchmarkExiste.getNome(),
                benchmarkExiste.getPais1(),
                benchmarkExiste.getPais2(),
                benchmarkExiste.getDataInicio(),
                benchmarkExiste.getDataFim(),
                new ResultadoDTO(
                        benchmarkExiste.getResultado().getPaisUmCasos(),
                        benchmarkExiste.getResultado().getPaisDoisCasos(),
                        benchmarkExiste.getResultado().getPaisUmMortes(),
                        benchmarkExiste.getResultado().getPaisDoisMortes(),
                        benchmarkExiste.getResultado().getPaisUmTaxaLetalidade(),
                        benchmarkExiste.getResultado().getPaisDoisTaxaLetalidade()
                        )
        );

        return benchmark;
    }

    @Transactional
    public BenchmarkDTO editarBenchmark(String id, BenchmarkDTO data) {
        UUID idBenchmark = UUID.fromString(id);

        BenchmarkEntity benchmarkEntity = benchmarkRepository
                .findById(idBenchmark)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado"));


        if (data.getDataInicio().isAfter(data.getDataFim())) {
            throw new IllegalArgumentException("A data de início não pode ser maior que a data final");
        }

        benchmarkEntity.setNome(data.getNome());
        benchmarkEntity.setPais1(data.getPais1());
        benchmarkEntity.setPais2(data.getPais2());
        benchmarkEntity.setDataInicio(data.getDataInicio());
        benchmarkEntity.setDataFim(data.getDataFim());

        CovidApiClientResponseDTO pais1DadosCovid = covidApiClientService.buscarDadosCovid(data.getPais1());
        CovidApiClientResponseDTO pais2DadosCovid = covidApiClientService.buscarDadosCovid(data.getPais2());

        ResultadoEntity resultado = resultadoService.criarResultado(pais1DadosCovid, pais2DadosCovid, benchmarkEntity);
        benchmarkEntity.setResultado(resultado);

        benchmarkRepository.save(benchmarkEntity);

        return new BenchmarkDTO(
                benchmarkEntity.getId(),
                benchmarkEntity.getNome(),
                benchmarkEntity.getPais1(),
                benchmarkEntity.getPais2(),
                benchmarkEntity.getDataInicio(),
                benchmarkEntity.getDataFim(),
                benchmarkEntity.getResultado() != null ?
                        new ResultadoDTO(
                                benchmarkEntity.getResultado().getPaisUmCasos(),
                                benchmarkEntity.getResultado().getPaisDoisCasos(),
                                benchmarkEntity.getResultado().getPaisUmMortes(),
                                benchmarkEntity.getResultado().getPaisDoisMortes(),
                                benchmarkEntity.getResultado().getPaisUmTaxaLetalidade(),
                                benchmarkEntity.getResultado().getPaisDoisTaxaLetalidade()
                        ) : null
        );
    }

    public void deletarBenchmark(String id) {
         UUID idBenchmark = UUID.fromString(id);
        benchmarkRepository
                .findById(idBenchmark)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado"));

        benchmarkRepository.deleteById(idBenchmark);
    }
}


