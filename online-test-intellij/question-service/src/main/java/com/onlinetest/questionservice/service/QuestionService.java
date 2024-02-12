package com.onlinetest.questionservice.service;

import com.onlinetest.questionservice.entity.Question;
import com.onlinetest.questionservice.exceptions.QuestionNotFoundException;

import java.util.List;

public interface QuestionService {
    public Question addQuestion(Question question);
    public Question getQuestionById(Integer id) throws QuestionNotFoundException;
    public List<Question> getAllQuestions() throws QuestionNotFoundException;
    public Question updateQuestion(Question question) throws QuestionNotFoundException;
    public String deleteQuestionById(Integer id) throws QuestionNotFoundException;
    public Integer getMarkByQuestionId(Integer id) throws QuestionNotFoundException;
    public Integer getCorrectAnswer(Integer id) throws QuestionNotFoundException;
    public String assignTestIdToQuestion(Integer qid, Integer tid) throws QuestionNotFoundException;
    List<Question> getAllQuestionsByTestId(Integer id) throws QuestionNotFoundException;
}
