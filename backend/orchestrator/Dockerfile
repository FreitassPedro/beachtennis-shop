FROM openjdk:23-jdk

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto para o contêiner
COPY . .

# Expor a porta do backend
EXPOSE 8080

# Executar o backend
CMD ["java", "-jar", "backend/target/orchestrator-0.0.1-SNAPSHOT.jar"]