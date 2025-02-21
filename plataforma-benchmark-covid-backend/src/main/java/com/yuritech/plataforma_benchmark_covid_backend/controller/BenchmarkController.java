package com.yuritech.plataforma_benchmark_covid_backend.controller;

import com.yuritech.plataforma_benchmark_covid_backend.dtos.BenchmarkDTO;
import com.yuritech.plataforma_benchmark_covid_backend.service.BenchmarkService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/benchmark-covid")
public class BenchmarkController {

    private  BenchmarkService benchmarkService;

    public BenchmarkController(BenchmarkService benchmarkService) {
        this.benchmarkService = benchmarkService;
    }


    @PostMapping("/criar")
    public ResponseEntity<BenchmarkDTO> criarBenchmark(@RequestBody @Valid BenchmarkDTO data){
        benchmarkService.criarBenchmark(data);
       return ResponseEntity.ok().body(data);
    }
}
