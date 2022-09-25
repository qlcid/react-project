package com.ssg.pjt.backend.api.service;

import com.ssg.pjt.backend.api.dto.req.LoginReq;
import com.ssg.pjt.backend.api.dto.req.SignUpReq;
import com.ssg.pjt.backend.db.entity.User;
import com.ssg.pjt.backend.db.repository.UserRepository;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;

  @Transactional
  public User signup(final SignUpReq req) {
    User user = User.builder()
        .userId(req.getUserId())
        .gender(req.getGender())
        .name(req.getName())
        .password(req.getPassword())
        .userDesc(req.getUserDesc())
        .language(req.getLanguage())
        .build();

    return userRepository.save(user);
  }

  public User login(final LoginReq req) {
    User user = userRepository.findByUserIdAndPassword(req.getUserId(), req.getPassword()).orElseThrow();

    return user;
  }
}
