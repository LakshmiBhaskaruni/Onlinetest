package com.onlinetest.questionservice.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id", nullable = false)
    private Integer questionId;

    @NotBlank(message = "Question Title should not be null, empty or blank")
    @Column(name = "question_title", nullable = false)
    private String questionTitle;

    @NotNull(message = "Question Options should not be empty")
    @Size(min=4, max=4, message = "There should be exactly four question options")
    @Column(name = "question_options", nullable = false)
    private String[] questionOptions;

    @Min(value=0, message = "Answer range should be in the range [0-3]")
    @Max(value=3, message = "Answer range should be in the range [0-3]")
    @Column(name = "question_answer", nullable = false)
    @NotNull(message = "Question Answer should not be empty")
    private Integer questionAnswer;

    @NotNull(message = "Question Marks should not be empty")
    @Column(name = "question_marks", nullable = false)
    private Integer questionMarks;

    @Column(name = "test_id")
    private Integer testId;



    public Question(String questionTitle,
                    @NotNull(message = "Question Options should not be empty")
                    @Size(min = 4, max = 4, message = "There should be exactly four question options")
                    String[] questionOptions,
                    @NotNull(message = "Question Answer should not be empty")
                    Integer questionAnswer,
                    @NotNull(message = "Question Marks should not be empty")
                    Integer questionMarks) {
        this.questionTitle = questionTitle;
        this.questionOptions = questionOptions;
        this.questionAnswer = questionAnswer;
        this.questionMarks = questionMarks;
    }
}
