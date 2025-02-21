package com.yuritech.plataforma_benchmark_covid_backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Data
@Setter
@Getter
@Entity
@Table(name = "benchmark")
public class BenchmarkEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotBlank(message = "O campo não pode ser vazio")
    @Column(length = 100)
    private String nome;

    @NotBlank(message = "O campo não pode ser vazio")
    @Column(name="pais_um", length = 100)
    private String pais1;

    @NotBlank(message = "O campo não pode ser vazio")
    @Column(name="pais_dois", length = 100)
    private String pais2;

    @NotNull(message = "Informe uma data válida")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataInicio;

    @NotNull(message = "Informe uma data válida")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataFim;

    @CreationTimestamp
    private Instant createdAt;
}
