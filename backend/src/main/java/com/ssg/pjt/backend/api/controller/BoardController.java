package com.ssg.pjt.backend.api.controller;

import com.ssg.pjt.backend.api.dto.req.BoardReq;
import com.ssg.pjt.backend.api.service.BoardService;
import com.ssg.pjt.backend.db.entity.Board;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/board")
public class BoardController {
  private final BoardService service;

  @ApiOperation(value = "메인 모집글 조회", notes = "메인 화면의 프로젝트 팀원 모집글을 조회한다.")
  @GetMapping("")
  public ResponseEntity<List<Board>> findBoardList() {
    return ResponseEntity.ok(service.findBoardList());
  }

  @ApiOperation(value = "글 상세", notes = "프로젝트 모집글 상세를 조회한다.")
  @GetMapping("/{boardId}")
  public ResponseEntity<Board> findBoard(@PathVariable Integer boardId) {
    return ResponseEntity.ok(service.findBoard(boardId));
  }

  @ApiOperation(value = "글 작성", notes = "글 작성을 한다.")
  @PostMapping("")
  public ResponseEntity write(@RequestBody BoardReq req) {
    service.write(req);

    return new ResponseEntity(HttpStatus.OK);
  }

  @ApiOperation(value = "글 수정", notes = "글 수정을 한다.")
  @PutMapping("/{boardId}")
  public ResponseEntity update(@PathVariable Integer boardId, @RequestBody BoardReq req) {
    service.update(boardId, req);

    return new ResponseEntity(HttpStatus.OK);
  }

  @ApiOperation(value = "글 삭제", notes = "글 삭제를 한다.")
  @DeleteMapping("/{boardId}")
  public ResponseEntity delete(@PathVariable Integer boardId, @RequestParam String userId) {
    service.delete(boardId, userId);

    return new ResponseEntity(HttpStatus.OK);
  }
}
