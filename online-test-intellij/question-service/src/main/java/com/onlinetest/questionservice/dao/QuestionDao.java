package com.onlinetest.questionservice.dao;

import com.onlinetest.questionservice.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface QuestionDao extends JpaRepository<Question, Integer> {
    public List<Question> findAllByTestId(Integer testId);

}
