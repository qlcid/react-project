package com.ssg.pjt.backend.db.repository;

import com.ssg.pjt.backend.db.entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Integer> {
}
