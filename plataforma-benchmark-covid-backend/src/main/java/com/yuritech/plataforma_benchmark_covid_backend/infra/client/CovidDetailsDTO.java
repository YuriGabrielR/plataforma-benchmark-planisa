package com.yuritech.plataforma_benchmark_covid_backend.infra.client;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CovidDetailsDTO {
    private int total;
    private int novosDados;
}
