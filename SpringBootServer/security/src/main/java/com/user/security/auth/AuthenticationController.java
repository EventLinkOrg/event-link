package com.user.security.auth;

import com.user.security.DTO.AuthenticationRequest;
import com.user.security.DTO.AuthenticationResponse;
import com.user.security.DTO.RegisterRequest;
import com.user.security.DTO.RegisterResponse;
import com.user.security.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;

  @GetMapping("/confirm")
  public String confirm(@RequestParam("token") String token){
    return service.confirmEmailToken(token);
  }

  @PostMapping("/register")
  public ResponseEntity<RegisterResponse> register(
      @RequestBody RegisterRequest request
  ) {
    return ResponseEntity.ok(service.register(request));
  }

  @PostMapping("/login")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(service.authenticate(request));
  }

}
