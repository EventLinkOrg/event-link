package com.user.security.handler;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<?> handleException(IllegalStateException exception){
        return ResponseEntity
                .badRequest()
                .body(
                        ApiException.builder()
                        .messages(new String[]{exception.getMessage()})
                        .httpStatus(HttpStatus.BAD_REQUEST.value())
                        .timestamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build()
                );
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<?> handleException(EntityNotFoundException exception){
        return ResponseEntity
                .badRequest()
                .body(ApiException.builder()
                        .messages(new String[]{exception.getMessage()})
                        .httpStatus(HttpStatus.BAD_REQUEST.value())
                        .timestamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build());
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<?> handleException(UsernameNotFoundException exception){
        return new ResponseEntity<>(ApiException.builder()
                        .messages(new String[]{exception.getMessage()})
                        .httpStatus(HttpStatus.NOT_FOUND.value())
                        .timestamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build(),HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleException(MethodArgumentNotValidException exception){
        return ResponseEntity
                .badRequest()
                .body(GenericApiException.builder()
                        .messages(exception.getDetailMessageArguments())
                        .httpStatus(HttpStatus.BAD_REQUEST.value())
                        .timestamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build());
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<?> handleException(AuthenticationException exception){
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN.value())
                .body(ApiException.builder()
                        .messages(new String[]{exception.getMessage()})
                        .httpStatus(HttpStatus.FORBIDDEN.value())
                        .timestamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build());
    }

    @ExceptionHandler(InternalServerError.class)
    public ResponseEntity<?> handleException(InternalServerError exception){
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .body(ApiException.builder()
                        .messages(new String[]{"Internal server error"})
                        .httpStatus(HttpStatus.FORBIDDEN.value())
                        .timestamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build());
    }

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<?> handleException(ExpiredJwtException exception){
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN.value())
                .body(ApiException.builder()
                        .messages(new String[]{"Token expired"})
                        .httpStatus(HttpStatus.FORBIDDEN.value())
                        .timestamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build());
    }
}
