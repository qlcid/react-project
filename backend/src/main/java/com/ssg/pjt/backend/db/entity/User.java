package com.ssg.pjt.backend.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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
@Table(name = "user")
public class User {

  @Id
  @Column(name = "user_id")
  private String userId;

  @Column(name = "password")
  private String password;

  @Column(name = "name")
  private String name;

  @Column(name = "content")
  private String content;

  @Column(name = "gender")
  private String gender;

  @OneToOne
  @JoinColumn(name = "language_id")
  private Language language;
}