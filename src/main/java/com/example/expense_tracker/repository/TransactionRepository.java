package com.example.expense_tracker.repository;

import com.example.expense_tracker.models.Transaction;
import com.example.expense_tracker.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUser(User user);
}
