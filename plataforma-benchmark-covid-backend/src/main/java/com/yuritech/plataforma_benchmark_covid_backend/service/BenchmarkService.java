package com.yuritech.plataforma_benchmark_covid_backend.service;


import com.yuritech.plataforma_benchmark_covid_backend.dtos.BenchmarkDTO;
import com.yuritech.plataforma_benchmark_covid_backend.entities.BenchmarkEntity;
import com.yuritech.plataforma_benchmark_covid_backend.repositories.BenchmarkRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

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

}


