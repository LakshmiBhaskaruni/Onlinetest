package com.onlinetest.testservice.controller;

import com.onlinetest.testservice.dto.Response;
import com.onlinetest.testservice.entity.Test;
import com.onlinetest.testservice.exceptions.TestNotFoundException;
import com.onlinetest.testservice.service.TestService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tests")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TestController {
    private final TestService testService;
    @PostMapping("/")
    public ResponseEntity<Test> addTest(@Valid @RequestBody Test test) {
        return new ResponseEntity<>(testService.addTest(test), HttpStatus.OK);
    }
    @PutMapping("/")
    public ResponseEntity<Test> updateTest(@Valid @RequestBody Test test) throws TestNotFoundException {
        return new ResponseEntity<>(testService.updateTest(test), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Test> getTestById(@PathVariable Integer id) throws TestNotFoundException {
        return new ResponseEntity<>(testService.getTestById(id), HttpStatus.OK);
    }
    @GetMapping("/")
    public ResponseEntity<List<Test>> getAllTests() throws TestNotFoundException {
        return new ResponseEntity<>(testService.getAllTests(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTestById(@PathVariable Integer id) throws TestNotFoundException {
        return new ResponseEntity<>(testService.deleteTestById(id), HttpStatus.OK);
    }

    @PostMapping("/getScore")
    public ResponseEntity<Integer> getScore(@RequestBody List<Response> responses) {
        return new ResponseEntity<>(testService.getScore(responses), HttpStatus.OK);
    }




}
