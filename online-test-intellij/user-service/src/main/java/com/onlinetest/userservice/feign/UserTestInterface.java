package com.onlinetest.userservice.feign;

import jakarta.validation.Valid;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient("TEST-SERVICE")
public interface UserTestInterface {
//    @PostMapping
//    public ResponseEntity<Test> addTest(@Valid @RequestBody Test test) {
//        return new ResponseEntity<>(testService.addTest(test), HttpStatus.CREATED);
//    }
//    @PutMapping
//    public ResponseEntity<Test> updateTest(@Valid @RequestBody Test test) throws TestNotFoundException {
//        return new ResponseEntity<>(testService.updateTest(test), HttpStatus.OK);
//    }
//    @GetMapping("{id}")
//    public ResponseEntity<Test> getTestById(@PathVariable Integer id) throws TestNotFoundException {
//        return new ResponseEntity<>(testService.getTestById(id), HttpStatus.FOUND);
//    }
//
//    @DeleteMapping("{id}")
//    public ResponseEntity<String> deleteTestById(@PathVariable Integer id) throws TestNotFoundException {
//        return new ResponseEntity<>(testService.deleteTestById(id), HttpStatus.OK);
//    }
}
