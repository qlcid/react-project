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
public class SignUpReq {

  @ApiModelProperty(name = "사용자 ID", example = "test")
  private String userId;
  
  @ApiModelProperty(name = "비밀번호", example = "test")
  private String password;
  
  @ApiModelProperty(name = "이름", example = "김테스트")
  private String name;

  @ApiModelProperty(name = "자기소개", example = "자개소개")
  private String content;

  @ApiModelProperty(name = "성별", example = "F")
  private String gender;

  @ApiModelProperty(name = "언어", example = "1")
  private Integer languageId;
}
