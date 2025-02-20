package com.yuritech.plataforma_benchmark_covid_backend.repositories;

import com.yuritech.plataforma_benchmark_covid_backend.entities.BenchmarkEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BenchmarkRepository extends JpaRepository<BenchmarkEntity, UUID> {}
