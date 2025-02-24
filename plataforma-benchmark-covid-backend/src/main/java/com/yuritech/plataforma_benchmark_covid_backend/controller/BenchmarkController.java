package com.yuritech.plataforma_benchmark_covid_backend.controller;

import com.yuritech.plataforma_benchmark_covid_backend.dtos.BenchmarkDTO;
import com.yuritech.plataforma_benchmark_covid_backend.entities.BenchmarkEntity;
import com.yuritech.plataforma_benchmark_covid_backend.service.BenchmarkService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/benchmarks-covid")
public class BenchmarkController {

    private  BenchmarkService benchmarkService;


    public BenchmarkController(BenchmarkService benchmarkService) {
        this.benchmarkService = benchmarkService;
    }

    @GetMapping()
    public ResponseEntity<List<BenchmarkDTO>> listarBenchmarks(){
        var listagemBenchmarksResultado = benchmarkService.listarBenchmarks();
        return ResponseEntity.ok(listagemBenchmarksResultado);
    }

    @PostMapping("/criar")
    public ResponseEntity criarBenchmark(@RequestBody @Valid BenchmarkDTO data){
        var benchmarkCriado = benchmarkService.criarBenchmark(data);


        return ResponseEntity.ok().body("Benchmark criado");
    }

    @GetMapping("/{id}")
    public ResponseEntity<BenchmarkDTO> listarBenchmarkPorId(@PathVariable String id){
        BenchmarkDTO resultado = benchmarkService.listarBenchmarkPorId(id);
        return ResponseEntity.ok().body(resultado);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<BenchmarkDTO> editarBenchmark(@PathVariable("id") String id, @RequestBody @Valid BenchmarkDTO data) {
        BenchmarkDTO benchmarkEditado = benchmarkService.editarBenchmark(id, data);
        return ResponseEntity.ok(benchmarkEditado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletarBenchmark(@PathVariable("id") String id) {
        benchmarkService.deletarBenchmark(id);
        return  ResponseEntity.noContent().build();
    }

}




