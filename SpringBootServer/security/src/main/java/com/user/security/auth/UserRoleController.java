package com.user.security.auth;

import com.user.security.DTO.*;
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
    //In this controller will be registered the endpoints that at least will need authentication
    private final UserRoleService service;

    @PutMapping("logout")
    public ResponseEntity<?> logOut(
            @RequestBody LogOutRequest request){
        service.logOut(request);
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasAuthority('USER')")
    @GetMapping("/users")
    public ResponseEntity<PageModel<AppUserResponse>> getUsers(
             GetUsersRequest request
            ){

        return ResponseEntity.ok(service.getUsers(request));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/users")
    public ResponseEntity<?> addRoleToUser(
            @RequestBody AddRoleRequest request
    ){
        service.addRoleToUser(request);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/roles")
    public ResponseEntity<List<Role>> getRoles() {
        return ResponseEntity.ok(service.getRoles());
    }
}
