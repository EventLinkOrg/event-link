package com.user.security.auth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.user.security.DTO.AuthenticationRequest;
import com.user.security.DTO.AuthenticationResponse;
import com.user.security.DTO.RegisterRequest;
import com.user.security.DTO.RegisterResponse;
import com.user.security.service.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Validated
public class AuthenticationController {

  private final AuthenticationService service;

  @GetMapping("/confirm")
  public String confirm(@RequestParam("token") String token){
    return service.confirmEmailToken(token);
  }

  @PostMapping("/register")
  public ResponseEntity<RegisterResponse> register(
      @RequestBody @Valid RegisterRequest request
  ) {
    return ResponseEntity.ok(service.register(request));
  }

  @PostMapping("/login")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) throws JsonProcessingException {
    return ResponseEntity.ok(service.authenticate(request));
  }

  @GetMapping("/error")
  public ResponseEntity<?> throwException(){
    return ResponseEntity.ok(service.throwException());
  }

}
