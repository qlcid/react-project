package com.ssg.pjt.backend.api.controller;

import com.ssg.pjt.backend.api.dto.req.ApplyReq;
import com.ssg.pjt.backend.api.dto.res.TeamStatRes;
import com.ssg.pjt.backend.api.service.TeamService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/teamstat")
public class TeamController {
  private final TeamService service;

  @ApiOperation(value = "팀 현황 조회", notes = "<strong>사용자 아아디</strong>를 통해 팀 현황을 조회한다.")
  @GetMapping("/{userId}")
  public ResponseEntity<TeamStatRes> findApplicant(@PathVariable String userId) {
    return ResponseEntity.ok(service.findApplicant(userId));
  }

  @ApiOperation(value = "팀 가입 승인", notes = "<strong>사용자 아아디</strong>를 통해 해당 사용자를 승인한다.")
  @PutMapping("{userId}")
  public ResponseEntity approve(@PathVariable String userId) {
    service.approve(userId);

    return new ResponseEntity(HttpStatus.OK);
  }

  @ApiOperation(value = "팀 신청", notes = "팀 가입을 신청한다.")
  @PostMapping("")
  public ResponseEntity apply(@RequestBody ApplyReq req) throws Exception {
    service.apply(req);

    return new ResponseEntity(HttpStatus.OK);
  }
}
