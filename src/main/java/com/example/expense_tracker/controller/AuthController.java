package com.example.expense_tracker.controller;

import com.example.expense_tracker.models.User;
import com.example.expense_tracker.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        User savedUser = userService.registerUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());
        System.out.println("user info "+ user);
        return ResponseEntity.ok(loggedInUser);
    }

    @GetMapping("/test" )
    public String test() {
        return "Auth Controller is working ✅";
    }
}
