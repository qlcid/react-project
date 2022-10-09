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
public class LoginReq {

  @ApiModelProperty(name = "사용자 ID", example = "test")
  private String userId;

  @ApiModelProperty(name = "비밀번호", example = "test")
  private String password;

}
