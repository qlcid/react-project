package com.ssg.pjt.backend.api.dto.res;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssg.pjt.backend.db.entity.User;
import java.time.LocalDateTime;
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
  private String boardContent;
  private String language;
  private String state;
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
  private LocalDateTime boardDate;
  private User user;
}
