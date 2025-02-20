package com.yuritech.plataforma_benchmark_covid_backend.infra.client;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class CovidApiClientService {

    private final CovidApiClient covidApiClient;

    public CovidApiClientResponseDTO buscarDadosCovid(String countryName){

        String apiKeyValue = "2BWFsIzdHWMRDmp8aST5+A==bhCpRRQP52PpzHVY";
        CovidApiClientResponseDTO[] casos = covidApiClient.buscarDados(countryName, "cases", apiKeyValue);
        CovidApiClientResponseDTO[] mortes = covidApiClient.buscarDados(countryName, "deaths", apiKeyValue);

        System.out.println(casos);

        if (casos.length == 1 && mortes.length == 1) {
            String country = casos[0].getCountry();
            Map<String, CovidDetailsDTO> cases = casos[0].getCases();
            Map<String, CovidDetailsDTO> deaths = mortes[0].getDeaths();

            return new CovidApiClientResponseDTO(country, cases, deaths);
        }

        return null;
    }

}
