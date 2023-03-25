package com.user.security.service;

import com.user.security.DTO.AddRoleRequest;
import com.user.security.DTO.UserUpdateRequest;
import com.user.security.domain.AppUser;
import com.user.security.domain.Role;
import com.user.security.repository.RoleRepository;
import com.user.security.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserRoleService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final RedisService redisService;

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
        Optional<AppUser> optUser = userRepository.findByEmail(email);

        if(optUser.isEmpty()){
            return null;
        }

        AppUser user = optUser.get();

        return AppUser.builder()
                .id(user.getId())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .email(user.getEmail())
                .roles(user.getRoles())
                .build();

    }

    public Role getRole(String name){
        return roleRepository.findByName(name)
                .orElseThrow(()-> new UsernameNotFoundException("role not found"));
    }

    public void addRoleToUser(AddRoleRequest addRoleRequest){

        AppUser user = userRepository.findById(addRoleRequest.getUserId())
                .orElseThrow(()->new UsernameNotFoundException("User not found"));

        Role role = roleRepository.findById(addRoleRequest.getRoleId())
                .orElseThrow(()->new UsernameNotFoundException("Role not found"));

//        if(user.getRoles() != null && user.getRoles().stream()
//                .filter(r -> r.getId().equals(role.getId()))
//                .collect(Collectors.toList())
//                .isEmpty()){
//            throw new RuntimeException("role already exists");
//        }
        user.getRoles().add(role);

    }

    public Role addRole(String roleName){
        //todo check if the role exists
        Role role = Role.builder()
                .name(roleName)
                .build();
        return roleRepository.save(role);
    }

    public void updateUser(UserUpdateRequest request){

    }

    public void enableAppUser(String email){
        userRepository.enableAppUser(email);
    }

    public AppUser save(AppUser user){
        return userRepository.save(user);
    }

    public Role save(Role role){
        return roleRepository.save(role);
    }

    public void logOut(String token){
        redisService.deleteRow(token);
    }

    public AppUser findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}
