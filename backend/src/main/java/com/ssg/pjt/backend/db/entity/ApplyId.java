package com.ssg.pjt.backend.db.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Embeddable
public class ApplyId implements Serializable {

  @Column(name = "user_id")
  private String userId;

  @Column(name = "board_id")
  private Integer boardId;
}
