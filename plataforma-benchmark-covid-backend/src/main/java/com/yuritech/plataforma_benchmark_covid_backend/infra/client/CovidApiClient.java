package com.yuritech.plataforma_benchmark_covid_backend.infra.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "covidApi", url = "https://api.api-ninjas.com/v1")
public interface CovidApiClient {
    @GetMapping("/covid19")
    CovidApiClientResponseDTO[] buscarDados(
            @RequestParam("country") String country,
            @RequestParam("type") String type,
            @RequestHeader("X-Api-Key") String apiKey);
}
