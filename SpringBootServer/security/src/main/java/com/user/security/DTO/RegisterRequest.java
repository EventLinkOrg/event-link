package com.user.security.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
//import org.springframework.lang.NonNull;

@Data
@Builder
@AllArgsConstructor
public class RegisterRequest {

  @NonNull
  @Size(min = 3, message = "Name must be at least 3 characters long")
  private String firstname;

  @NonNull
  @Size(min = 3, message = "Surname must be at least 3 characters long")
  private String lastname;

  @NonNull
  @Email(message = "Please provide a valid email address")
  private String email;

  @NonNull
  @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$", message = "Password must have minimum 6 characters and at least one number")
  private String password;

}
