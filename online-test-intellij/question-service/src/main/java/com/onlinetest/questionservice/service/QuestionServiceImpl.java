package com.onlinetest.questionservice.service;

import com.onlinetest.questionservice.dao.QuestionDao;
import com.onlinetest.questionservice.entity.Question;
import com.onlinetest.questionservice.exceptions.QuestionNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
    private final QuestionDao questionDao;
    @Override
    public Question addQuestion(Question question) {
        return questionDao.save(question);
    }

    @Override
    public Question getQuestionById(Integer id) throws QuestionNotFoundException {
        Question question = questionDao.findById(id).orElseThrow(() -> new QuestionNotFoundException("Question with id: " + id + " not found"));
        return question;
    }
    @Override
    public List<Question> getAllQuestions() throws QuestionNotFoundException {
        List<Question> questions = questionDao.findAll();
        if(questions.isEmpty()) {
            throw new QuestionNotFoundException("No questions found");
        }
        return questions;
    }
    @Override
    public Question updateQuestion(Question question) throws QuestionNotFoundException {
        Question questionFound = getQuestionById(question.getQuestionId());
        return questionDao.save(question);
    }

    @Override
    public String deleteQuestionById(Integer id) throws QuestionNotFoundException {
        Question question = getQuestionById(id);
        questionDao.delete(question);
        return "Question with id: "+id+" deleted successfully";
    }

    @Override
    public Integer getMarkByQuestionId(Integer id) throws QuestionNotFoundException {
        Question question = getQuestionById(id);
        return question.getQuestionMarks();
    }

    @Override
    public Integer getCorrectAnswer(Integer id) throws QuestionNotFoundException {
        Question question = getQuestionById(id);
        return question.getQuestionAnswer();
    }

    @Override
    public String assignTestIdToQuestion(Integer qid, Integer tid) throws QuestionNotFoundException {
        Question question = getQuestionById(qid);
        question.setTestId(tid);
        questionDao.save(question);
        return "Test Id: "+tid+" is assigned to the question id:"+qid+" successfully";
    }
    @Override
    public List<Question> getAllQuestionsByTestId(Integer id) throws QuestionNotFoundException {
        List<Question> questions = questionDao.findAllByTestId(id);
        if (questions.isEmpty()) {
            throw new QuestionNotFoundException("No questions found for the Test with test id:" + id);
        }
        return questions;
    }
}
