package com.yuritech.plataforma_benchmark_covid_backend.service;


import com.yuritech.plataforma_benchmark_covid_backend.dtos.BenchmarkDTO;
import com.yuritech.plataforma_benchmark_covid_backend.entities.BenchmarkEntity;
import com.yuritech.plataforma_benchmark_covid_backend.repositories.BenchmarkRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BenchmarkService {

    private BenchmarkRepository benchmarkRepository;

    public BenchmarkService(BenchmarkRepository benchmarkRepository) {
        this.benchmarkRepository = benchmarkRepository;
    }


    public BenchmarkDTO criarBenchmark(BenchmarkDTO data){

        if(data.getDataInicio().isAfter(data.getDataFim())){
            throw  new IllegalArgumentException("A data de início não pode ser maior que a data final");
        }

        var dataToEntity = new BenchmarkEntity();
        dataToEntity.setNome(data.getNome());
        dataToEntity.setPais1(data.getPais1());
        dataToEntity.setPais2(data.getPais2());
        dataToEntity.setDataInicio(data.getDataInicio());
        dataToEntity.setDataFim(data.getDataFim());

        benchmarkRepository.save(dataToEntity);

        return data;
    }

    public List<BenchmarkEntity> listarBenchmarks() {
        var listagemBenchmarks = benchmarkRepository.findAll();
        return listagemBenchmarks;
    }

    public Optional<BenchmarkDTO>  listarBenchmarkPorId(String id) {
        var benchmarkExiste = benchmarkRepository.findById(UUID.fromString(id)).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));

        var benchmark =  new BenchmarkDTO();
        benchmark.setId(benchmarkExiste.getId());
        benchmark.setNome(benchmarkExiste.getNome());
        benchmark.setPais1(benchmarkExiste.getPais1());
        benchmark.setPais2(benchmarkExiste.getPais2());
        benchmark.setDataInicio(benchmarkExiste.getDataInicio());
        benchmark.setDataFim(benchmarkExiste.getDataFim());

        return Optional.of(benchmark);
    }
}


