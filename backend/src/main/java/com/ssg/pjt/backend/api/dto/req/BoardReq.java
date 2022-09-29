package com.ssg.pjt.backend.api.dto.req;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardReq {
  
  @ApiModelProperty(name = "게시글 제목", example = "글 제목")
  private String boardTitle;
  
  @ApiModelProperty(name = "게시글 내용", example = "글 내용")
  private String boardContent;

  @ApiModelProperty(name = "모집 언어", example = "JAVA")
  private String language;

  @ApiModelProperty(name = "모집 지역", example = "Seoul")
  private String state;
  
  @ApiModelProperty(name = "사용자 ID", example = "test")
  private String userId;
}
