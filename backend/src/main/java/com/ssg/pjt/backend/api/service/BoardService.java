package com.ssg.pjt.backend.api.service;

import com.ssg.pjt.backend.api.dto.req.BoardReq;
import com.ssg.pjt.backend.db.entity.Board;
import com.ssg.pjt.backend.db.entity.User;
import com.ssg.pjt.backend.db.repository.BoardRepository;
import com.ssg.pjt.backend.db.repository.UserRepository;
import java.util.List;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {
  private final BoardRepository boardRepository;
  private final UserRepository userRepository;

  public List<Board> findBoardList() {
    return boardRepository.findAll();
  }

  public Board findBoard(Integer boardId) {
    return boardRepository.findById(boardId).orElseThrow();
  }

  @Transactional
  public void write(BoardReq req) {
    User user = userRepository.findById(req.getUserId()).orElseThrow();

    Board board = Board.builder()
        .boardTitle(req.getBoardTitle())
        .boardContent(req.getBoardContent())
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
}
