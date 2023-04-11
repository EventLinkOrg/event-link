package com.user.security.service;

import com.user.security.DTO.*;
import com.user.security.config.JwtService;
import com.user.security.domain.*;
import com.user.security.email.EmailBuilder;
import com.user.security.email.EmailSender;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AuthenticationService {

  @Value("${constants.email-sender.email-link}")
  private String EMAIL_LINK;

  @Value("${spring.mail.username}")
  private String EMAIL_ACC;

  private final UserRoleService userRoleService;

  private final PasswordEncoder passwordEncoder;

  private final JwtService jwtService;

  private final AuthenticationManager authenticationManager;

  private final EmailSender emailSender;

  private final RedisService redisService;

  public RegisterResponse register(RegisterRequest request) {

    //trying to get the user from the database
    AppUser tryUser = userRoleService.getUser(request.getEmail());

    //if user exists and has confirmed the account don't generate the link
    if(tryUser != null ){
      System.out.println(tryUser);
      if(tryUser.isEnabled()) throw new UsernameNotFoundException("There is an account associated with this email");
    }

    //if db fetch is empty add the user to database adn add the role USER
    if(tryUser == null) {

      var user = AppUser.builder()
              .firstname(request.getFirstname())
              .lastname(request.getLastname())
              .email(request.getEmail())
              .password(passwordEncoder.encode(request.getPassword()))
              .enabled(Boolean.FALSE)
              .locked(Boolean.TRUE)
              .build();

      Role role = userRoleService.getRole("USER");

      user.setRoles(Collections.singletonList(role));

      tryUser = userRoleService.save(user);

    }

    //then generate the token for the newly users and also for the registered db users but who haven't confirmed
    String tokenEmail = UUID.randomUUID().toString();

    ConfirmationTokenDTO confirmationToken = ConfirmationTokenDTO.builder()
            .token(tokenEmail)
            .email(tryUser.getEmail())
            .build();

    System.out.println(confirmationToken);
    redisService.setValue(
            tokenEmail,
            confirmationToken,
            redisService.EMAIL_TOKEN_LIFESPAN
            );

    emailSender.send(request.getEmail(),
            EMAIL_ACC,
            EmailBuilder.buildEmail(
                    request.getFirstname(),
                    EMAIL_LINK
                    ));

    return RegisterResponse.builder()
        .confirmationEmail(tokenEmail)
        .build();

  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    var user = userRoleService.findByEmail(request.getEmail());

    if(!user.isEnabled()){
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
    claimsMap.put("userId", user.getId());



    var jwtToken = jwtService.generateToken(claimsMap, user);

    JwtUser redisUser = JwtUser.builder()
            .userId(user.getId())
            .authorities(user.getAuthorities().stream().toList())
            .sub(user.getUsername())
            .iat(new Date(System.currentTimeMillis()))
            .exp(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
            .build();

    redisService.setValue(jwtToken, redisUser, redisService.AUTH_JWT_TOKEN_LIFESPAN);

    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  @Transactional
  public String confirmEmailToken(String token) {
    ConfirmationTokenDTO confirmationToken =
            (ConfirmationTokenDTO) redisService.getValue(token);

    if(confirmationToken == null){
      throw new IllegalStateException("Token expired or doesn't exist");
    }

    if (confirmationToken.isConfirmed()) {
      throw new IllegalStateException("email already confirmed");
    }

    redisService.deleteRow(token);

    userRoleService.enableAppUser(
            confirmationToken.getEmail());
    
    return "confirmed";

  }

  public String throwException() {
    throw new EntityNotFoundException("this is illegal");
  }

}
