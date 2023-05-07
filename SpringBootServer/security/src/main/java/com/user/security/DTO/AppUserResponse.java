package com.user.security.DTO;

import com.user.security.domain.Role;
import lombok.Builder;
import lombok.Data;

import java.util.Collection;
import java.util.UUID;

@Data
@Builder
public class AppUserResponse {
    private UUID id;
    private String firstname;
    private String lastname;
    private String email;
    private boolean enabled;
    private boolean locked;

    private Collection<Role> roles;

}
