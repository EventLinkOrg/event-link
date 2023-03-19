package com.user.security.other;

import com.user.security.auth.AuthenticationService;
import com.user.security.domain.Role;
import com.user.security.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/secured")
@RequiredArgsConstructor
public class OtherController {
    private final AuthenticationService service;


    @PreAuthorize("hasAuthority('hello')")
    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok(service.getUsers());
    }

    @GetMapping("/roles")
    public ResponseEntity<List<Role>> getRoles() {
        return ResponseEntity.ok(service.getRoles());
    }
}
