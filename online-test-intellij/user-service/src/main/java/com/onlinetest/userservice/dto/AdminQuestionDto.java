package com.onlinetest.userservice.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminQuestionDto {
    private Integer questionId;
    private String questionTitle;
    private String[] questionOptions;
    private Integer questionAnswer;
    private Integer questionMarks;
    private Integer testId;
}
