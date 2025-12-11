import { useState, useEffect, useCallback } from "react";
import { getTransactions } from "../api/transactions";

export default function useTransactions(email) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    if (!email) return;
    setLoading(true);
    try {
      const res = await getTransactions(email);
      setTransactions(res.data || []);
    } catch (err) {
      console.error("fetch trx err", err);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  }, [email]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { transactions, setTransactions, fetch, loading };
}
