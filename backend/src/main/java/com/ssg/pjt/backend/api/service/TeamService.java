package com.ssg.pjt.backend.api.service;

import com.ssg.pjt.backend.api.dto.req.ApplyReq;
import com.ssg.pjt.backend.api.dto.res.TeamStatRes;
import com.ssg.pjt.backend.db.entity.Apply;
import com.ssg.pjt.backend.db.entity.Board;
import com.ssg.pjt.backend.db.entity.User;
import com.ssg.pjt.backend.db.repository.ApplyRepository;
import com.ssg.pjt.backend.db.repository.BoardRepository;
import com.ssg.pjt.backend.db.repository.UserRepository;
import java.util.List;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TeamService {
  private final UserRepository userRepository;
  private final ApplyRepository applyRepository;
  private final BoardRepository boardRepository;

  public TeamStatRes findApplicant(String userId) {
    Board board = boardRepository.findByUserUserId(userId).orElseThrow();

    List<Apply> apply = applyRepository.findByBoardBoardId(board.getBoardId());

    return new TeamStatRes(board.getBoardTitle(), board.getBoardContent(), apply);
  }

  @Transactional
  public void approve(String userId) {
    Apply apply = applyRepository.findByUserUserId(userId).orElseThrow();
    apply.update();
    applyRepository.save(apply);
  }

  @Transactional
  public void apply(ApplyReq req) throws Exception {
    User user = userRepository.findById(req.getUserId()).orElseThrow();
    Board board = boardRepository.findById(req.getBoardId()).orElseThrow();

    if (applyRepository.findByUserUserId(req.getUserId()).isPresent()) {
      throw new Exception();
    }

    Apply apply = Apply.builder()
        .user(user)
        .board(board)
        .applyYn("N")
        .build();

    applyRepository.save(apply);
  }
}
