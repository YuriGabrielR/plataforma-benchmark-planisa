package com.yuritech.plataforma_benchmark_covid_backend.infra.client;



import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Map;

@Data
@AllArgsConstructor
public class CovidApiClientResponseDTO {
    private String country;
    private Map<String, CovidDetailsDTO> cases;
    private Map<String, CovidDetailsDTO> deaths;

}