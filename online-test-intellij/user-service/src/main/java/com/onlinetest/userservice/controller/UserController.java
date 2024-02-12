package com.onlinetest.userservice.controller;

import com.onlinetest.userservice.entity.User;
import com.onlinetest.userservice.exceptions.UserNotFoundException;
import com.onlinetest.userservice.exceptions.UsernameCannotChangeException;
import com.onlinetest.userservice.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PutMapping("/")
    public ResponseEntity<User> updateUser(@Valid @RequestBody User user) throws UserNotFoundException, UsernameCannotChangeException {
        User updateUser = userService.updateUser(user);
        updateUser.setPassword("***secret***");
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }
    @GetMapping("/getUser/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) throws UserNotFoundException {
        User user = userService.getUserById(id);
        user.setPassword("***secret***");
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
