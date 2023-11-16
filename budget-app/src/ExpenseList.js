import React from 'react';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
