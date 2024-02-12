package com.onlinetest.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserQuestionDto {
    private Integer questionId;
    private String questionTitle;
    private String[] questionOptions;
    private Integer questionMarks;
    private Integer testId;
}
