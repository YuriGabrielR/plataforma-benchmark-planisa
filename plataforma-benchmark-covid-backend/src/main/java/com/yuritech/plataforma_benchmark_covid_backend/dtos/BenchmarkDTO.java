package com.yuritech.plataforma_benchmark_covid_backend.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Getter
@Setter
@AllArgsConstructor
public class BenchmarkDTO {
    private UUID id;
    private String nome;
    private String pais1;
    private String pais2;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dataInicio;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dataFim;

    private ResultadoDTO resultado;
}
