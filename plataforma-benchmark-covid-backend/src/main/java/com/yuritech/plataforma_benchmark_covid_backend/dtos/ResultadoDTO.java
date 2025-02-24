package com.yuritech.plataforma_benchmark_covid_backend.dtos;

import com.yuritech.plataforma_benchmark_covid_backend.entities.BenchmarkEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Data
@Getter
@Setter
@AllArgsConstructor
public class ResultadoDTO {
    private int paisUmCasos;

    private int paisDoisCasos;

    private int paisUmMortes;

    private int paisDoisMortes;

    private BigDecimal paisUmTaxaLetalidade;

    private BigDecimal paisDoisTaxaLetalidade;
}
