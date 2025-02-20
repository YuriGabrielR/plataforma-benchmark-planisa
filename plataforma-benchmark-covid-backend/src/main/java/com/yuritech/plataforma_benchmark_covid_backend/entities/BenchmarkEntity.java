package com.yuritech.plataforma_benchmark_covid_backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "benchmark")
public class BenchmarkEntity {

    @Id
    private UUID id;

    @Column(length = 100)
    private String nome;

    @Column(name="pais_um", length = 100)
    private String pais1;

    @Column(name="pais_dois", length = 100)
    private String pais2;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataInicio;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataFim;

    @CreationTimestamp
    private Instant createdAt;
}
