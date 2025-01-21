package com.aschad.inventoryservice.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.aschade.inventoryservice.repository") // Pacote onde seus repositórios JPA estão
@EntityScan(basePackages = "com.aschad.ecommerce.entity")
public class AppConfig {

}
