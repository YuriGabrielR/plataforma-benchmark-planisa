package com.yuritech.plataforma_benchmark_covid_backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Table(name = "benchmark")
@Entity
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

    @OneToOne(mappedBy = "benchmark", cascade = CascadeType.ALL, orphanRemoval = true)
    private ResultadoEntity resultado;


    public BenchmarkEntity() {}
    public BenchmarkEntity(UUID id, String nome, String pais1, String pais2, LocalDate dataInicio, LocalDate dataFim, Instant createdAt, ResultadoEntity resultado) {
        this.id = id;
        this.nome = nome;
        this.pais1 = pais1;
        this.pais2 = pais2;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.createdAt = createdAt;
        this.resultado = resultado;
    }


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public @NotBlank(message = "O campo não pode ser vazio") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "O campo não pode ser vazio") String nome) {
        this.nome = nome;
    }

    public @NotBlank(message = "O campo não pode ser vazio") String getPais1() {
        return pais1;
    }

    public void setPais1(@NotBlank(message = "O campo não pode ser vazio") String pais1) {
        this.pais1 = pais1;
    }

    public @NotBlank(message = "O campo não pode ser vazio") String getPais2() {
        return pais2;
    }

    public void setPais2(@NotBlank(message = "O campo não pode ser vazio") String pais2) {
        this.pais2 = pais2;
    }

    public @NotNull(message = "Informe uma data válida") LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(@NotNull(message = "Informe uma data válida") LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public @NotNull(message = "Informe uma data válida") LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim(@NotNull(message = "Informe uma data válida") LocalDate dataFim) {
        this.dataFim = dataFim;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public ResultadoEntity getResultado() {
        return resultado;
    }

    public void setResultado(ResultadoEntity resultado) {
        this.resultado = resultado;
    }
}
