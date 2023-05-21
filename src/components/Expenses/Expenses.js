import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [year, setYear] = useState("2020");
    const getSelectedYearHandler = (yearSelected) => {
        setYear(yearSelected);
    };
    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === year
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={year}
                    onGetSelectedYear={getSelectedYearHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
