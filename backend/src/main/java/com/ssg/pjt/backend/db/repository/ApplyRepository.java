package com.ssg.pjt.backend.db.repository;

import com.ssg.pjt.backend.db.entity.Apply;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplyRepository extends JpaRepository<Apply, Integer> {
  List<Apply> findByBoardBoardId(Integer boardId);
  Optional<Apply> findByUserUserId(String userId);
}
