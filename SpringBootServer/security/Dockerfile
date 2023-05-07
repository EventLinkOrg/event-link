FROM maven:3.8.3-openjdk-17-slim AS build-env

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven project file to the container
COPY pom.xml .

# Download and cache the project dependencies
RUN mvn dependency:go-offline

# Copy the rest of the project source code to the container
COPY src/ ./src/

# Build the Spring Boot application using Maven
RUN mvn package -DskipTests

# Start with a base image that includes Java and Alpine Linux
FROM openjdk:17-jdk-alpine3.14

# Set the working directory inside the container
WORKDIR /app

# Copy the Spring Boot application JAR file to the container
COPY --from=build-env /app/target/security-0.0.1-SNAPSHOT.jar .

# Expose the port that the application listens on (change 8080 to the actual port used by your application)
EXPOSE 8080

# Set any necessary environment variables (if needed)
#ENV SPRING_PROFILES_ACTIVE=prod

# Start the Spring Boot application when the container is run, with a bind mount to mount the application.yml file at runtime
CMD ["java", "-jar", "security-0.0.1-SNAPSHOT.jar", "--spring.config.location=/app/application.yml"]
