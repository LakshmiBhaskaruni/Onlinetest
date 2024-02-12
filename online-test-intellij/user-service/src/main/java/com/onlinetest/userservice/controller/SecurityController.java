package com.onlinetest.userservice.controller;


import com.onlinetest.userservice.entity.User;
import com.onlinetest.userservice.exceptions.UserNotFoundException;
import com.onlinetest.userservice.model.JwtRequest;
import com.onlinetest.userservice.model.JwtResponse;
import com.onlinetest.userservice.service.UserService;
import com.onlinetest.userservice.utility.JwtTokenUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/security")
@RequiredArgsConstructor
public class SecurityController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }
    @Autowired
    public void setJwtTokenUtil(JwtTokenUtil jwtTokenUtil) {
        this.jwtTokenUtil = jwtTokenUtil;
    }
    @Autowired
    public void setUserDetailsService(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private UserDetailsService userDetailsService;
    @PostMapping("/login")
    public String login(@RequestBody JwtRequest jwtRequest) {
        doAuthentication(jwtRequest.getUsername(), jwtRequest.getPassword());
        UserDetails userDetails = userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token = jwtTokenUtil.generateToken(userDetails);
//        JwtResponse jwtResponse = JwtResponse
//                .builder()
//                .username(userDetails.getUsername())
//                .jwtToken(token)
//                .build();
        return token;
    }

    private void doAuthentication(String username, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        try {
            authenticationManager.authenticate(authenticationToken);
        }
        catch(AuthenticationException ae) {
            System.out.println("bad credentials");
        }
    }
    @PostMapping("/register")
    public ResponseEntity<User> addUser(@Valid @RequestBody User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        User addedUser = userService.addUser(user);

        addedUser.setPassword("***secret***");
        return new ResponseEntity<>(addedUser, HttpStatus.OK);
    }

    @PostMapping("/getUserByUsername")
    public ResponseEntity<User> getUserByUsername(@RequestBody String username) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getUserByUsername(username), HttpStatus.OK);
    }


}
