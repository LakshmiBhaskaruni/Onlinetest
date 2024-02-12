package com.onlinetest.testservice.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="test")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_id", nullable = false)
    private Integer testId;

    @NotBlank(message = "Test Title should not be null, empty or blank")
    @Column(name = "test_title", nullable = false)
    private String testTitle;

    @NotNull(message = "Test Duration should not be null, empty or blank")
    @Column(name = "test_duration", nullable = false)
    private LocalTime testDuration;

    @NotNull(message = "Test Start Time should not be null, empty or blank")
    @Column(name = "test_start_time", nullable = false)
    private LocalDateTime startTime;

    @NotNull(message = "Test End Time should not be null, empty or blank")
    @Column(name = "test_end_time", nullable = false)
    private LocalDateTime endTime;

    //@Column(name = "test_question")
    //private Set<QuestionWrapper> questionWrapper=new LinkedHashSet<>();

    public Test(String testTitle, LocalTime testDuration, LocalDateTime startTime, LocalDateTime endTime) {
        this.testTitle = testTitle;
        this.testDuration = testDuration;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
