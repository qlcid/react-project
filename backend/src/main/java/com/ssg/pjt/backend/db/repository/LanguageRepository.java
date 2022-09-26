package com.ssg.pjt.backend.db.repository;

import com.ssg.pjt.backend.db.entity.Apply;
import com.ssg.pjt.backend.db.entity.ApplyId;
import com.ssg.pjt.backend.db.entity.Language;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Integer> {
}
