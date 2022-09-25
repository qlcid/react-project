package com.ssg.pjt.backend.db.entity;

import com.ssg.pjt.backend.api.dto.req.BoardReq;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Entity
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "apply")
public class Apply {

  @EmbeddedId
  private ApplyId applyId;

  @MapsId("userId")
  @OneToOne
  @JoinColumn(name = "user_id")
  private User user;

  @MapsId("boardId")
  @OneToOne
  @JoinColumn(name = "board_id")
  private Board board;

  @Column(name = "apply_yn")
  private String applyYn;

  public void update() {
    this.applyYn = "Y";
  }
}