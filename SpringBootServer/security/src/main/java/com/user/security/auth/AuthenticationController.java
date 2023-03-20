package com.user.security.auth;

import com.user.security.DTO.AddRoleRequest;
import com.user.security.DTO.AuthenticationRequest;
import com.user.security.DTO.AuthenticationResponse;
import com.user.security.DTO.RegisterRequest;
import com.user.security.domain.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;

  @GetMapping("/confirm")
  public String confirm(@RequestParam("token") String token){
    return service.confirmToken(token);
  }

//  @PostMapping("/users/roles")
//  public ResponseEntity<?> addRoleToUser(
//          @RequestBody AddRoleRequest request
//  ) {
//    service.addRoleToUser(request);
//    return ResponseEntity.ok().build();
//  }

  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(
      @RequestBody RegisterRequest request
  ) {
    return ResponseEntity.ok(service.register(request));
  }
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(service.authenticate(request));
  }

//  @PostMapping("/roles")
//  public ResponseEntity<Role> addRole(
//          @RequestBody String request
//  ) {
//    return ResponseEntity.ok(service.addRole(request));
//  }

//  @GetMapping("/roles")
//  public ResponseEntity<List<Role>> addRole() {
//    return ResponseEntity.ok(service.getRoles());
//  }
}
