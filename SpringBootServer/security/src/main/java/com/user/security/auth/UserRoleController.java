package com.user.security.auth;

import com.user.security.domain.Role;
import com.user.security.domain.AppUser;
import com.user.security.service.UserRoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//todo rename to userRoleController
@RestController
@RequestMapping("/api/v1/secured")
@RequiredArgsConstructor
@Validated
public class UserRoleController {
    private final UserRoleService service;

    @PutMapping
    public ResponseEntity<?> logOut(String token){
        service.logOut(token);
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasAuthority('hello')")
    @GetMapping("/users")
    public ResponseEntity<List<AppUser>> getUsers(){
        return ResponseEntity.ok(service.getUsers());
    }

    @GetMapping("/roles")
    public ResponseEntity<List<Role>> getRoles() {
        return ResponseEntity.ok(service.getRoles());
    }
}
