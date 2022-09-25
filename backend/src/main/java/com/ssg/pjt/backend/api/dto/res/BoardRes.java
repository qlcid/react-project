package com.ssg.pjt.backend.api.dto.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardRes {
  private Integer boardId;
  private String boardTitle;
  private String userId;
}
