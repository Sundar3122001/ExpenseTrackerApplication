package com.example.expense_tracker.controller;

import com.example.expense_tracker.models.Transaction;
import com.example.expense_tracker.models.User;
import com.example.expense_tracker.repository.UserRepository;
import com.example.expense_tracker.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:3000") // if you use React frontend
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private UserRepository userRepository;

    // ✅ Add a transaction
    @PostMapping
    public Transaction addTransaction(@RequestBody Transaction transaction, @RequestParam String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        transaction.setUser(user);
        return transactionService.addTransaction(transaction);
    }

    // ✅ Get all transactions for a user
    @GetMapping
    public List<Transaction> getTransactions(@RequestParam String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return transactionService.getTransactionsByUser(user);
    }
}
