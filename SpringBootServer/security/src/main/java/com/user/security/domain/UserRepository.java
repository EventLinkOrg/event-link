package com.user.security.domain;

import java.util.Optional;
import java.util.UUID;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<AppUser, UUID> {

  Optional<AppUser> findByEmail(String email);

  @Transactional
  @Modifying
  @Query("UPDATE AppUser a " +
          "SET a.enabled = TRUE WHERE a.email = ?1")
  int enableAppUser(String email);
}
