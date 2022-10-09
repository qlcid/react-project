package com.ssg.pjt.backend.api.service;

import com.ssg.pjt.backend.api.dto.req.BoardReq;
import com.ssg.pjt.backend.api.dto.res.BoardCheckRes;
import com.ssg.pjt.backend.api.dto.res.BoardRes;
import com.ssg.pjt.backend.db.entity.Board;
import com.ssg.pjt.backend.db.entity.User;
import com.ssg.pjt.backend.db.repository.BoardRepository;
import com.ssg.pjt.backend.db.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {
  private final BoardRepository boardRepository;
  private final UserRepository userRepository;

  public List<BoardRes> findBoardList() {
    List<BoardRes> boardList = new ArrayList<>();
    boardList = boardRepository.findAll().stream().map(
        board -> BoardRes.builder()
            .boardId(board.getBoardId())
            .boardTitle(board.getBoardTitle())
            .boardContent(board.getBoardContent())
            .language(board.getLanguage())
            .state(board.getState())
            .boardDate(board.getBoardDate())
            .user(board.getUser())
            .build()).collect(Collectors.toList());
    return boardList;
  }

  public BoardRes findBoard(Integer boardId) {
    Board board = boardRepository.findById(boardId).orElseThrow();

    return BoardRes.builder()
        .boardId(board.getBoardId())
        .boardTitle(board.getBoardTitle())
        .boardContent(board.getBoardContent())
        .language(board.getLanguage())
        .state(board.getState())
        .boardDate(board.getBoardDate())
        .user(board.getUser())
        .build();
  }

  @Transactional
  public void write(BoardReq req) {
    User user = userRepository.findById(req.getUserId()).orElseThrow();

    Board board = Board.builder()
        .boardTitle(req.getBoardTitle())
        .boardContent(req.getBoardContent())
        .language(req.getLanguage())
        .state(req.getState())
        .user(user)
        .build();

    boardRepository.save(board);
  }

  @Transactional
  public void update(Integer boardId, BoardReq req) {
    Board board = boardRepository.findById(boardId).orElseThrow();

    board.update(req);
    boardRepository.save(board);
  }

  @Transactional
  public void delete(Integer boardId, String userId) {
    User user = userRepository.findById(userId).orElseThrow();

    Board board = boardRepository.findById(boardId).orElseThrow();

    boardRepository.delete(board);
  }

  public BoardCheckRes checkWriteYn(String userId) {
     Board board = boardRepository.findByUserUserId(userId).orElseThrow();
     return new BoardCheckRes(board.getBoardId());
  }
}
