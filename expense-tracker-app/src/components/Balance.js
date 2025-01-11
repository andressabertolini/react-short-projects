import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc + item), 0).toFixed(2);

    return(
        <div>
            <h4 className="color-dark-green mb-10">Your Balance</h4>
            <h2 className={(total < 0 ? "color-red":"color-green") + " box mb-30"}>${total}</h2>
        </div>
    )
}