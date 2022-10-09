package com.ssg.pjt.backend.db.repository;

import com.ssg.pjt.backend.db.entity.Board;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {

  Optional<Board> findByUserUserId(String userId);
}
