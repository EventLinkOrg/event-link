package com.user.security.config;

import com.user.security.repository.UserRepository;
import com.user.security.security.JwtAuthEntryPoint;
import com.user.security.service.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

  private final UserRepository repository;

  private final CustomUserDetailsService userDetailsService;
//  @Bean
//  public UserDetailsService userDetailsService() {
//    return username -> repository.findByEmail(username)
//        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//  }

  @Bean
  public AuthenticationProvider authenticationProvider() {
    DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
    authProvider.setUserDetailsService(userDetailsService);
    authProvider.setPasswordEncoder(passwordEncoder());
    return authProvider;
  }

  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
    return config.getAuthenticationManager();
  }

//  @Bean
//  public AuthorizationManager authorizationManager(){
//    return new AuthorizationManager() {
//      @Override
//      public AuthorizationDecision check(Supplier authentication, Object object) {
//        return null;
//      }
//    }
//  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  JwtAuthEntryPoint authEntryPoint(){
    return new JwtAuthEntryPoint();
  }
}
