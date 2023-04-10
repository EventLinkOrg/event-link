package com.user.security.service;

import com.user.security.DTO.*;
import com.user.security.domain.AppUser;
import com.user.security.domain.Role;
import com.user.security.repository.RoleRepository;
import com.user.security.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    public List<AppUserResponse> getUsers(){
        List<AppUser> users = userRepository.findAll();
        return users.stream().map(this::entity2Dto).collect(Collectors.toList());
    }

    public PageModel<AppUserResponse> getUsers(GetUsersRequest request){
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize(), Sort.by(request.getSortColumn()));

        if(request.getSortDirection().equals("DESC")){
            pageable = PageRequest.of(request.getPage(), request.getSize(), Sort.by(request.getSortColumn()).descending());
        }
        Page<AppUser> data = userRepository.findAll(pageable);

        return PageModel.<AppUserResponse>builder()
                .page(data.getNumber())
                .size(data.getSize())
                .total(data.getTotalPages())
                .sortedColumn(request.getSortColumn())
                .data(data.stream().map(this::entity2Dto).collect(Collectors.toList()))
                .build();
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
                .enabled(user.isEnabled())
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

    public AppUserResponse entity2Dto(AppUser user){
        return AppUserResponse.builder()
                .id(user.getId())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .email(user.getEmail())
                .enabled(user.isEnabled())
                .locked(user.isLocked())
                .roles(user.getRoles())
                .build();
    }
}
