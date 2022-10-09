package com.ssg.pjt.backend.api.dto.res;

import com.ssg.pjt.backend.db.entity.Apply;
import com.ssg.pjt.backend.db.entity.User;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Builder;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class TeamStatRes {
  Integer boardId;
  String boardTitle;
  String boardContent;
  List<Applicant> applicants;

  public TeamStatRes(Integer boardId, String boardTitle, String boardContent, List<Apply> apply) {
    this.boardId = boardId;
    this.boardTitle = boardTitle;
    this.boardContent = boardContent;
    this.applicants = apply.stream().map(
        a -> Applicant.builder()
        .user(a.getUser())
        .applyYn(a.getApplyYn())
        .build()
    ).collect(Collectors.toList());
  }

  @Getter
  @Builder
  static public class Applicant {
    User user;
    String applyYn;
  }
}

