package com.yuritech.plataforma_benchmark_covid_backend.service;


import com.yuritech.plataforma_benchmark_covid_backend.dtos.BenchmarkDTO;
import com.yuritech.plataforma_benchmark_covid_backend.dtos.ResultadoDTO;
import com.yuritech.plataforma_benchmark_covid_backend.entities.BenchmarkEntity;
import com.yuritech.plataforma_benchmark_covid_backend.entities.ResultadoEntity;
import com.yuritech.plataforma_benchmark_covid_backend.infra.client.CovidApiClientResponseDTO;
import com.yuritech.plataforma_benchmark_covid_backend.infra.client.CovidDetailsDTO;
import com.yuritech.plataforma_benchmark_covid_backend.repositories.BenchmarkRepository;
import com.yuritech.plataforma_benchmark_covid_backend.repositories.ResultadoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Map;

@Service
public class ResultadoService {

    private final ResultadoRepository resultadoRepository;
    private final BenchmarkRepository benchmarkRepository;

    public ResultadoService(ResultadoRepository resultadoRepository, BenchmarkRepository benchmarkRepository) {
        this.resultadoRepository = resultadoRepository;
        this.benchmarkRepository = benchmarkRepository;
    }

    @Transactional
    public ResultadoEntity criarResultado(CovidApiClientResponseDTO pais1, CovidApiClientResponseDTO pais2, BenchmarkEntity benchmark) {
        System.out.println(pais1);
        int pais1Casos = calcularTotal(pais1.getCases(), benchmark.getDataInicio(), benchmark.getDataFim());
        int pais2Casos = calcularTotal(pais2.getCases(), benchmark.getDataInicio(), benchmark.getDataFim());
        int pais1Mortes = calcularTotal(pais1.getDeaths(), benchmark.getDataInicio(), benchmark.getDataFim());
        int pais2Mortes = calcularTotal(pais2.getDeaths(), benchmark.getDataInicio(), benchmark.getDataFim());

        BigDecimal pais1TaxaLetalidade = calcularTaxaLetalidade(pais1Casos, pais1Mortes);
        BigDecimal pais2TaxaLetalidade = calcularTaxaLetalidade(pais2Casos, pais2Mortes);

        ResultadoEntity resultado = new ResultadoEntity();
        resultado.setBenchmark(benchmark);
        resultado.setPaisUmCasos(pais1Casos);
        resultado.setPaisDoisCasos(pais2Casos);
        resultado.setPaisUmMortes(pais1Mortes);
        resultado.setPaisDoisMortes(pais2Mortes);
        resultado.setPaisUmTaxaLetalidade(pais1TaxaLetalidade);
        resultado.setPaisDoisTaxaLetalidade(pais2TaxaLetalidade);

        return resultadoRepository.save(resultado);
    }


    private int calcularTotal(Map<String, CovidDetailsDTO> dataMap, LocalDate dataInicio, LocalDate dataFim) {
        return dataMap.entrySet().stream()
                .filter(entry -> {
                    LocalDate entryDate = LocalDate.parse(entry.getKey());
                    return (entryDate.isEqual(dataInicio) || entryDate.isAfter(dataInicio)) && (entryDate.isBefore(dataFim) || entryDate.isEqual(dataFim));
                })
                .mapToInt(entry -> entry.getValue().getTotal())
                .sum();
    }

    private BigDecimal calcularTaxaLetalidade(int casos, int mortes) {
        if (casos == 0) return BigDecimal.ZERO;
        return BigDecimal.valueOf((double) mortes / casos * 100);
    }
}
