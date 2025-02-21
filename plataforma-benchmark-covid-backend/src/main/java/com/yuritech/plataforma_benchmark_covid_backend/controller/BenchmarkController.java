package com.yuritech.plataforma_benchmark_covid_backend.controller;

import com.yuritech.plataforma_benchmark_covid_backend.dtos.BenchmarkDTO;
import com.yuritech.plataforma_benchmark_covid_backend.entities.BenchmarkEntity;
import com.yuritech.plataforma_benchmark_covid_backend.service.BenchmarkService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/benchmarks-covid")
public class BenchmarkController {

    private  BenchmarkService benchmarkService;

    public BenchmarkController(BenchmarkService benchmarkService) {
        this.benchmarkService = benchmarkService;
    }

    @GetMapping()
    public ResponseEntity<List<BenchmarkEntity>> listarBenchmarks(){
        var listagemBenchmarksResultado = benchmarkService.listarBenchmarks();
        return ResponseEntity.ok(listagemBenchmarksResultado);
    }

    @PostMapping("/criar")
    public ResponseEntity<BenchmarkDTO> criarBenchmark(@RequestBody @Valid BenchmarkDTO data){
        benchmarkService.criarBenchmark(data);
       return ResponseEntity.ok().body(data);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BenchmarkDTO> listarBenchmarkPorId(@PathVariable String id){
        BenchmarkDTO resultado = benchmarkService.listarBenchmarkPorId(id);
        return ResponseEntity.ok().body(resultado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletarBenchmark(@PathVariable("id") String id) {
        benchmarkService.deletarBenchmark(id);
        return  ResponseEntity.noContent().build();
    }
}




