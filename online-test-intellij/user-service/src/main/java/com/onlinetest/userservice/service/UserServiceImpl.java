package com.onlinetest.userservice.service;

import com.onlinetest.userservice.dao.UserDao;
import com.onlinetest.userservice.entity.User;
import com.onlinetest.userservice.exceptions.UserNotFoundException;
import com.onlinetest.userservice.exceptions.UsernameCannotChangeException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserDao userDao;
    @Override
    public User addUser(User user){
        return userDao.save(user);
    }
    @Override
    public User getUserById(Long id) throws UserNotFoundException {
        return userDao.findById(id).orElseThrow(() -> new UserNotFoundException("User with id: " + id + " not found"));
    }
    @Override
    public List<User> getAllUsers() throws UserNotFoundException {
        List<User> userList = userDao.findAll();
        if(userList.isEmpty()) {
            throw new UserNotFoundException("No users found");
        }
        return userList;

    }
    @Override
    public User updateUser(User user) throws UserNotFoundException, UsernameCannotChangeException {
        User foundUser = getUserById(user.getUserId());
        if(user.getUsername() != foundUser.getUsername()) {
            throw new UsernameCannotChangeException("Username cannot be changed");
        }
        return userDao.save(foundUser);
    }

    @Override
    public String deleteUserById(Long id) throws UserNotFoundException {
        User foundUser = getUserById(id);
        userDao.delete(foundUser);
        return "User with id:" + id + " deleted successfully";
    }
    @Override
    public User assignTestToUser(Integer testId, Long userId) throws UserNotFoundException {
        User foundUser = getUserById(userId);
        foundUser.setTestId(testId);
        return userDao.save(foundUser);
    }
    @Override
    public User getUserByUsername(String username) throws UserNotFoundException {
        return userDao.findByUsername(username).orElseThrow(() -> new UserNotFoundException("User with "+ username+ " not found"));
    }



}
