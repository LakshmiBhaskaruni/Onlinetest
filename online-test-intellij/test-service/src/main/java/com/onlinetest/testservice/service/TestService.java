package com.onlinetest.testservice.service;

import com.onlinetest.testservice.dto.Response;
import com.onlinetest.testservice.entity.Test;
import com.onlinetest.testservice.exceptions.TestNotFoundException;

import java.util.List;

public interface TestService {
    public Test addTest(Test test);
    public Test updateTest(Test test) throws TestNotFoundException;
    public Test getTestById(Integer id) throws TestNotFoundException;
    public String deleteTestById(Integer id) throws TestNotFoundException;
    public Integer getScore(List<Response> responses);
    public List<Test> getAllTests() throws TestNotFoundException;
}
