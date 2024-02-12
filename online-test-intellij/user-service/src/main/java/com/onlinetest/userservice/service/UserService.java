package com.onlinetest.userservice.service;

import com.onlinetest.userservice.entity.User;
import com.onlinetest.userservice.exceptions.UserNotFoundException;
import com.onlinetest.userservice.exceptions.UsernameCannotChangeException;

import java.util.List;

public interface UserService {
    User addUser(User user);

    List<User> getAllUsers() throws UserNotFoundException;

    User updateUser(User user) throws UserNotFoundException, UsernameCannotChangeException;

    String deleteUserById(Long id) throws UserNotFoundException;

    User getUserById(Long id) throws UserNotFoundException;

    User assignTestToUser(Integer testId, Long userId) throws UserNotFoundException;

    User getUserByUsername(String username) throws UserNotFoundException;
}
