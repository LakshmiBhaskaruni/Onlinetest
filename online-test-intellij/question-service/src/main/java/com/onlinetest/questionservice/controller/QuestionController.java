package com.onlinetest.questionservice.controller;


import com.onlinetest.questionservice.entity.Question;
import com.onlinetest.questionservice.exceptions.QuestionNotFoundException;
import com.onlinetest.questionservice.service.QuestionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
@CrossOrigin("*")
public class QuestionController {
    private final QuestionService questionService;
    @PostMapping("/")
    ResponseEntity<Question> addQuestion(@Valid @RequestBody Question question){
        return new ResponseEntity<>(questionService.addQuestion(question), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<Question> getQuestionById(@PathVariable Integer id) throws QuestionNotFoundException {
        return new ResponseEntity<>(questionService.getQuestionById(id), HttpStatus.OK);

    }
    @GetMapping("/")
    ResponseEntity<List<Question>> getAllQuestions() throws QuestionNotFoundException {
        return new ResponseEntity<>(questionService.getAllQuestions(), HttpStatus.OK);
    }

    @PutMapping("/")
    ResponseEntity<Question> updateQuestion(@Valid @RequestBody Question question) throws QuestionNotFoundException {
        return new ResponseEntity<>(questionService.updateQuestion(question), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> deleteQuestionById(@PathVariable Integer id) throws QuestionNotFoundException {
        return new ResponseEntity<>(questionService.deleteQuestionById(id), HttpStatus.OK);
    }

    @GetMapping("/getMarks/{id}")
    ResponseEntity<Integer> getMarksByQuestionId(@PathVariable Integer id) throws QuestionNotFoundException {
        return new ResponseEntity<>(questionService.getMarkByQuestionId(id), HttpStatus.OK);
    }

    @GetMapping("/getAnswer/{id}")
    ResponseEntity<Integer> getAnswerById(@PathVariable Integer id) throws QuestionNotFoundException {
        return new ResponseEntity<>(questionService.getCorrectAnswer(id), HttpStatus.OK);
    }

    @GetMapping("/assign/{qid}/{tid}")
    ResponseEntity<String> assignTestIdToQuestion(@PathVariable Integer qid, @PathVariable Integer tid) throws QuestionNotFoundException {
        return new ResponseEntity<>(questionService.assignTestIdToQuestion(qid, tid), HttpStatus.OK);
    }

    @GetMapping("/getQuestionsByTestId/{id}")
    ResponseEntity<List<Question>> getAllQuestionsByTestId(@PathVariable Integer id) throws QuestionNotFoundException {
        return new ResponseEntity<>(questionService.getAllQuestionsByTestId(id), HttpStatus.OK);
    }
}
