package com.ssg.pjt.backend.api.controller;

import com.ssg.pjt.backend.api.dto.req.LoginReq;
import com.ssg.pjt.backend.api.dto.req.SignUpReq;
import com.ssg.pjt.backend.api.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

  private final UserService service;

  @ApiOperation(value = "회원가입", notes = "<strong>아이디, 패스워드, 이름, 자기소개, 성별, 언어</strong>을 통해 회원가입 한다.")
  @PostMapping("/signup")
  public ResponseEntity signup(@RequestBody SignUpReq req) {
    service.signup(req);

    return new ResponseEntity(HttpStatus.OK);
  }

  @ApiOperation(value = "로그인", notes = "<strong>아이디와 패스워드</strong>를 통해 로그인 한다.")
  @PostMapping("/login")
  public ResponseEntity login(@RequestBody LoginReq req) {
    service.login(req);

    return new ResponseEntity(HttpStatus.OK);
  }
}
