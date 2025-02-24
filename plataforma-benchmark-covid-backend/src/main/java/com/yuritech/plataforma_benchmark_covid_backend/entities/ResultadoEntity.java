package com.yuritech.plataforma_benchmark_covid_backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.UUID;

@Table(name = "resultado")
@Entity
public class ResultadoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private int paisUmCasos;

    private int paisDoisCasos;

    private int paisUmMortes;

    private int paisDoisMortes;

    private BigDecimal paisUmTaxaLetalidade;

    private BigDecimal paisDoisTaxaLetalidade;

    @JsonIgnore
    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private BenchmarkEntity benchmark;


    public ResultadoEntity() {}

    public ResultadoEntity(UUID id, int paisUmCasos, int paisDoisCasos, int paisUmMortes, int paisDoisMortes, BigDecimal paisUmTaxaLetalidade, BigDecimal paisDoisTaxaLetalidade, BenchmarkEntity benchmark) {
        this.id = id;
        this.paisUmCasos = paisUmCasos;
        this.paisDoisCasos = paisDoisCasos;
        this.paisUmMortes = paisUmMortes;
        this.paisDoisMortes = paisDoisMortes;
        this.paisUmTaxaLetalidade = paisUmTaxaLetalidade;
        this.paisDoisTaxaLetalidade = paisDoisTaxaLetalidade;
        this.benchmark = benchmark;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public int getPaisUmCasos() {
        return paisUmCasos;
    }

    public void setPaisUmCasos(int paisUmCasos) {
        this.paisUmCasos = paisUmCasos;
    }

    public int getPaisDoisCasos() {
        return paisDoisCasos;
    }

    public void setPaisDoisCasos(int paisDoisCasos) {
        this.paisDoisCasos = paisDoisCasos;
    }

    public int getPaisUmMortes() {
        return paisUmMortes;
    }

    public void setPaisUmMortes(int paisUmMortes) {
        this.paisUmMortes = paisUmMortes;
    }

    public int getPaisDoisMortes() {
        return paisDoisMortes;
    }

    public void setPaisDoisMortes(int paisDoisMortes) {
        this.paisDoisMortes = paisDoisMortes;
    }

    public BigDecimal getPaisUmTaxaLetalidade() {
        return paisUmTaxaLetalidade;
    }

    public void setPaisUmTaxaLetalidade(BigDecimal paisUmTaxaLetalidade) {
        this.paisUmTaxaLetalidade = paisUmTaxaLetalidade;
    }

    public BigDecimal getPaisDoisTaxaLetalidade() {
        return paisDoisTaxaLetalidade;
    }

    public void setPaisDoisTaxaLetalidade(BigDecimal paisDoisTaxaLetalidade) {
        this.paisDoisTaxaLetalidade = paisDoisTaxaLetalidade;
    }

    public BenchmarkEntity getBenchmark() {
        return benchmark;
    }

    public void setBenchmark(BenchmarkEntity benchmark) {
        this.benchmark = benchmark;
    }
}
