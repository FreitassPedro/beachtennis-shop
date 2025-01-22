package com.aschade.orchestrator.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.aschade.orchestrator.repository") // Pacote onde seus repositórios JPA estão
@EntityScan(basePackages = "com.aschade.ecommerce.entity")
public class AppConfig {

}
