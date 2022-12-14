package com.ssg.pjt.backend.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssg.pjt.backend.api.dto.req.BoardReq;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
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
@Table(name = "board")
public class Board {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "board_id")
  private Integer boardId;

  @Column(name = "board_title")
  private String boardTitle;

  @Column(name = "board_content")
  private String boardContent;

  @Column(name = "language")
  private String language;

  @Column(name = "state")
  private String state;

  @Column(name = "create_date")
  private LocalDateTime boardDate;

  @OneToOne
  @JoinColumn(name = "user_id")
  private User user;

  @Builder.Default
  @JsonIgnore
  @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Apply> applies = new ArrayList<>();

  @PrePersist
  private void prePersist() {
    boardDate = LocalDateTime.now();
  }

  public void update(BoardReq req) {
    this.boardTitle = req.getBoardTitle();
    this.boardContent = req.getBoardContent();
    this.language = req.getLanguage();
    this.state = req.getState();
    this.boardDate = LocalDateTime.now();
  }
}
