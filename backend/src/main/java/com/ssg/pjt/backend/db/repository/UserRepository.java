package com.ssg.pjt.backend.db.repository;

import com.ssg.pjt.backend.db.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

  Optional<User> findByUserIdAndPassword(String userId, String password);
}
