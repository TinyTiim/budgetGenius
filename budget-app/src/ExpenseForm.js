import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) return;

    const newExpense = {
      id: uuidv4(),
      description,
      amount: parseFloat(amount),
    };

    addExpense(newExpense);

    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
