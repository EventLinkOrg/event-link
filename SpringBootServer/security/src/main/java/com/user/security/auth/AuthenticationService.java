package com.user.security.auth;

import com.user.security.config.JwtService;
import com.user.security.domain.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AuthenticationService {
  private final UserRepository userRepository;

  private final RoleRepository roleRepository;

  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request) {
    //todo check if the user exists
    var user = User.builder()
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .build();
    userRepository.save(user);
    //todo when registering the user add to the user the most basic role
    var jwtToken = jwtService.generateToken(user);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );
    var user = userRepository.findByEmail(request.getEmail())
        .orElseThrow(()->new UsernameNotFoundException("This user doesn't exist"));
    var claimsMap = new HashMap<String,Object>();
    claimsMap.put("authorities", user.getAuthorities());
    var jwtToken = jwtService.generateToken(claimsMap, user);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  public void addRoleToUser(AddRoleRequest addRoleRequest){

    User user = userRepository.findById(addRoleRequest.getUserId())
            .orElseThrow(()->new UsernameNotFoundException("User not found"));

    Role role = roleRepository.findById(addRoleRequest.getRoleId())
            .orElseThrow(()->new UsernameNotFoundException("Role not found"));

    user.getRoles().add(role);

  }

  public User getUser(String email){
    User user = userRepository.findByEmail(email)
            .orElseThrow(()->new UsernameNotFoundException("User not found"));
    return User.builder()
            .id(user.getId())
            .firstname(user.getFirstname())
            .lastname(user.getLastname())
            .email(user.getEmail())
            .roles(user.getRoles())
            .build();
  }

  public List<User> getUsers(){
    List<User> users = userRepository.findAll();
    return users.stream().map(user -> User.builder()
            .id(user.getId())
            .firstname(user.getFirstname())
            .lastname(user.getLastname())
            .email(user.getEmail())
            .roles(user.getRoles())
            .build()).collect(Collectors.toList());
  }

  public Role addRole(String roleName){
    //todo check if the role exists
    Role role = Role.builder()
            .name(roleName)
            .build();
    return roleRepository.save(role);
  }

  public List<Role> getRoles(){
    return roleRepository.findAll();
  }
}
