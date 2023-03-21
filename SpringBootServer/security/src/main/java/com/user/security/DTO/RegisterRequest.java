package com.user.security.DTO;

import lombok.*;
//import org.springframework.lang.NonNull;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  @NonNull
  private String firstname;
  private String lastname;

  private String email;
  private String password;
}
