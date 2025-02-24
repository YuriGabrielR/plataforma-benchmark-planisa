package com.yuritech.plataforma_benchmark_covid_backend.repositories;

import com.yuritech.plataforma_benchmark_covid_backend.entities.ResultadoEntity;
import org.hibernate.validator.constraints.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultadoRepository extends JpaRepository<ResultadoEntity, UUID>{
}
