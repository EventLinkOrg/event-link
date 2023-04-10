package com.user.security.DTO;

import lombok.*;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
public class AddRoleRequest {

    @NonNull
    private UUID userId;

    @NonNull
    private UUID roleId;

}
