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
public class ApplyReq {

  @ApiModelProperty(name = "게시글 ID", example = "1")
  private Integer boardId;

  @ApiModelProperty(name = "사용자 ID", example = "test")
  private String userId;
}
