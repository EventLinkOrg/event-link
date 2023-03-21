package com.user.security.service;

import com.user.security.DTO.AuthenticationRequest;
import com.user.security.DTO.AuthenticationResponse;
import com.user.security.DTO.RegisterRequest;
import com.user.security.DTO.RegisterResponse;
import com.user.security.config.JwtService;
import com.user.security.domain.*;
import com.user.security.domain.ConfirmationToken;
import com.user.security.email.EmailBuilder;
import com.user.security.email.EmailSender;
import com.user.security.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AuthenticationService {

  @Value("${constants.email-sender.email-link}")
  private String EMAIL_LINK;

  private final UserRepository userRepository;

  private final EmailConfirmationTokenService confirmationTokenService;

  private final PasswordEncoder passwordEncoder;

  private final JwtService jwtService;

  private final AuthenticationManager authenticationManager;

  private final EmailSender emailSender;

  public RegisterResponse register(RegisterRequest request) {

    if(userRepository.findByEmail(request.getEmail()).isEmpty()){
      throw new UsernameNotFoundException("there is an account associated with this email");
    }

    var user = AppUser.builder()
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .enabled(false)
        .locked(false)
        .build();

    AppUser savedUser = userRepository.save(user);

    String tokenEmail = UUID.randomUUID().toString();

    ConfirmationToken confirmationToken = ConfirmationToken.builder()
            .token(tokenEmail)
            .createdAt(LocalDateTime.now())
            .expiresAt(LocalDateTime.now().plusMinutes(15))
            .user(savedUser)
            .build();

    //todo save confirmation token to redis
    confirmationTokenService.saveConfirmationToken(confirmationToken);

    emailSender.send(request.getEmail(),
            EmailBuilder.buildEmail(
                    request.getFirstname(),
                    EMAIL_LINK
                    ));

    //todo when registering the user add to the user the most basic role
    return RegisterResponse.builder()
        .confirmationEmail(tokenEmail)
        .build();

  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    var user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(()->new UsernameNotFoundException("This user doesn't exist"));

    if(!user.getEnabled()){
      throw new UsernameNotFoundException("Account not confirmed");
    }

    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );

    var claimsMap = new HashMap<String,Object>();
    claimsMap.put("authorities", user.getAuthorities());
    var jwtToken = jwtService.generateToken(claimsMap, user);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  @Transactional
  public String confirmEmailToken(String token) {
    ConfirmationToken confirmationToken = confirmationTokenService
            .getToken(token)
            .orElseThrow(() ->
                    new IllegalStateException("token not found"));

    if (confirmationToken.getConfirmedAt() != null) {
      throw new IllegalStateException("email already confirmed");
    }

    LocalDateTime expiredAt = confirmationToken.getExpiresAt();

    if (expiredAt.isBefore(LocalDateTime.now())) {
      throw new IllegalStateException("token expired");
    }

    confirmationTokenService.setConfirmedAt(token);
    userRepository.enableAppUser(
            confirmationToken.getUser().getEmail());
    
    return "confirmed";
  }

}
