package com.user.security.service;

import com.user.security.DTO.AddRoleRequest;
import com.user.security.domain.AppUser;
import com.user.security.domain.Role;
import com.user.security.repository.RoleRepository;
import com.user.security.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserRoleService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    public List<AppUser> getUsers(){
        List<AppUser> users = userRepository.findAll();
        return users.stream().map(user -> AppUser.builder()
                .id(user.getId())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .email(user.getEmail())
                .roles(user.getRoles())
                .build()).collect(Collectors.toList());
    }

    public List<Role> getRoles(){
        return roleRepository.findAll();
    }

    public AppUser getUser(String email){
        AppUser user = userRepository.findByEmail(email)
                .orElseThrow(()->new UsernameNotFoundException("User not found"));
        return AppUser.builder()
                .id(user.getId())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .email(user.getEmail())
                .roles(user.getRoles())
                .build();
    }

    public void addRoleToUser(AddRoleRequest addRoleRequest){

        AppUser user = userRepository.findById(addRoleRequest.getUserId())
                .orElseThrow(()->new UsernameNotFoundException("User not found"));

        Role role = roleRepository.findById(addRoleRequest.getRoleId())
                .orElseThrow(()->new UsernameNotFoundException("Role not found"));

        user.getRoles().add(role);

    }

    public Role addRole(String roleName){
        //todo check if the role exists
        Role role = Role.builder()
                .name(roleName)
                .build();
        return roleRepository.save(role);
    }

}
