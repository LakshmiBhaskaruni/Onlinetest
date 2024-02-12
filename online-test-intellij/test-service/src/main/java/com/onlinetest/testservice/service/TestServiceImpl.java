package com.onlinetest.testservice.service;

import com.onlinetest.testservice.dao.TestDao;
import com.onlinetest.testservice.dto.Response;
import com.onlinetest.testservice.entity.Test;
import com.onlinetest.testservice.exceptions.TestNotFoundException;
import com.onlinetest.testservice.feign.TestInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TestServiceImpl implements TestService{
    private final TestDao testDao;
    private final TestInterface testInterface;

    @Override
    public Test addTest(Test test) {
        return testDao.save(test);
    }
    @Override
    public Test getTestById(Integer id) throws TestNotFoundException {
        Test testFound = testDao.findById(id).orElseThrow(() ->  new TestNotFoundException("Test with id: " + id + " not found"));
        return testFound;
    }
    @Override
    public Test updateTest(Test test) throws TestNotFoundException {
        Test testFound = getTestById(test.getTestId());
        return testDao.save(test);
    }
    @Override
    public String deleteTestById(Integer id) throws TestNotFoundException {
        Test testFound = getTestById(id);
        testDao.delete(testFound);
        return "Test with id: "+id+" deleted successfully";
    }

    @Override
    public Integer getScore(List<Response> responses) {
        int score = 0;
        for (Response response : responses) {
            if(testInterface.getAnswerById(response.getQuestionId()).getBody().equals(response.getChosenOption())) {
                score += testInterface.getMarksByQuestionId(response.getQuestionId()).getBody();
            }
        }
        return score;
    }

    @Override
    public List<Test> getAllTests() throws TestNotFoundException {
        List<Test> tests = testDao.findAll();
        if(tests.isEmpty())
            throw new TestNotFoundException("No tests found");
        return tests;
    }
}
