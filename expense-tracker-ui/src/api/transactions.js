import api from "./base";

export const addTransaction = (email, payload) =>
  api.post(`/transactions`, payload, { params: { email } });

export const getTransactions = (email) =>
  api.get(`/transactions`, { params: { email } });

export const deleteTransaction = (email, id) =>
  api.delete(`/transactions/${id}`, { params: { email } });

// export default helpers if you want
