package com.yuritech.plataforma_benchmark_covid_backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

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

    private LocalDateTime dataInicio;

    private LocalDateTime dataFim;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
