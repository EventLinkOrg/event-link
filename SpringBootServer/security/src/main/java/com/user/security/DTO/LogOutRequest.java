package com.user.security.DTO;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LogOutRequest {

    private String token;
}
