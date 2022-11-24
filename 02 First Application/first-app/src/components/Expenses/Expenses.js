import { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
