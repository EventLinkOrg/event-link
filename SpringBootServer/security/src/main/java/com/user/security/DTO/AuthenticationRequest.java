package com.user.security.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

  @NonNull
  @Email(message = "Please provide a valid email address")
  private String email;

  @NonNull
  @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$", message = "Password must have minimum 6 characters and at least one number")
  private String password;
}
