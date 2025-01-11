import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map( transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);
        
    return(
        <div className="inc-exp-container">
            <div className="mb-30">
                <h4 className="color-dark-green mb-10">Income</h4>
                <p className="color-green">+{income}</p>
            </div>
            <div className="mb-30">
                <h4 className="color-dark-green mb-10">Expense</h4>
                <p className="color-red">-{expense}</p>
            </div>
        </div>
    )
}