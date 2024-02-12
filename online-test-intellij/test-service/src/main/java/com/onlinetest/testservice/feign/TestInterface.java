package com.onlinetest.testservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("question-service")
public interface TestInterface {
    @GetMapping("questions/getMarks/{id}")
    ResponseEntity<Integer> getMarksByQuestionId(@PathVariable Integer id);

    @GetMapping("questions/getAnswer/{id}")
    ResponseEntity<Integer> getAnswerById(@PathVariable Integer id);
}