package com.onlinetest.questionservice.exceptions;

public class QuestionNotFoundException extends Exception {
    public QuestionNotFoundException() {}
    public QuestionNotFoundException(String message) {
        super(message);
    }
}
