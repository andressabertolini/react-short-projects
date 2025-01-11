import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount //turn to int
        }

        addTransaction(newTransaction);
    }

    return(
        <div>
            <h2 className="text-center mt-50 color-dark-green">
                Add Transaction
            </h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text" className="mb-10 color-dark-green">Title</label>
                    <input type="text" className="input w-100 mb-30" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div>
                    <label htmlFor="amount" className="mb-10 color-dark-green">
                        Amount<br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" className="input mb-30" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />                  
                </div>
                <button className="btn w-100 mb-50">Add Transaction</button>
            </form>
        </div>
    )
} 