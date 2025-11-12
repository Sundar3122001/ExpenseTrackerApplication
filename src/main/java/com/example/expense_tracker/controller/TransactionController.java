package com.example.expense_tracker.controller;

import com.example.expense_tracker.models.Transaction;
import com.example.expense_tracker.models.User;
import com.example.expense_tracker.repository.UserRepository;
import com.example.expense_tracker.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private UserRepository userRepository;

    // ✅ Add a transaction for the logged-in user
    @PostMapping
    public Transaction addTransaction(@RequestBody Transaction transaction, Authentication auth) {
        String email = auth.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        transaction.setUser(user);
        return transactionService.addTransaction(transaction);
    }

    // ✅ Get all transactions for the logged-in user
    @GetMapping
    public List<Transaction> getTransactions(Authentication auth) {
        String email = auth.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return transactionService.getTransactionsByUser(user);
    }
}
