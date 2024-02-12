package com.onlinetest.userservice.controller;

import com.onlinetest.userservice.entity.User;
import com.onlinetest.userservice.exceptions.UserNotFoundException;
import com.onlinetest.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
    private final UserService userService;

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers() throws UserNotFoundException {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users
                .stream()
                .peek(user -> user.setPassword("***secret**"))
                .collect(Collectors.toList()
                ), HttpStatus.OK);
    }
    @GetMapping("/getUser/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) throws UserNotFoundException {
        User user = userService.getUserById(id);
        user.setPassword("***secret***");
        return new ResponseEntity<>(user, HttpStatus.FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long id) throws UserNotFoundException {
        return new ResponseEntity<>(userService.deleteUserById(id), HttpStatus.OK);
    }

    @GetMapping("/assignTestToUser/{testId}/{userId}")
    public ResponseEntity<User> assignTestToUser(@PathVariable Integer testId, @PathVariable Long userId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.assignTestToUser(testId, userId), HttpStatus.OK);
    }
}
