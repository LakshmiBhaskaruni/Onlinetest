package com.onlinetest.userservice.feign;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("QUESTION-SERVICE")
public interface UserQuestionInterface {

}
