package com.ssg.pjt.backend.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "language")
public class Language {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "language_id")
  private Integer languageId;

  @Column(name = "language")
  private String language;
}
