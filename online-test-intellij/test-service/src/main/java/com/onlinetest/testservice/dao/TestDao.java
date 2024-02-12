package com.onlinetest.testservice.dao;

import com.onlinetest.testservice.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestDao extends JpaRepository<Test, Integer> {
}
