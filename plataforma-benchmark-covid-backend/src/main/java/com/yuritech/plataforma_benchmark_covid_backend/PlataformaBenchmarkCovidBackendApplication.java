package com.yuritech.plataforma_benchmark_covid_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class PlataformaBenchmarkCovidBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlataformaBenchmarkCovidBackendApplication.class, args);
	}

}
