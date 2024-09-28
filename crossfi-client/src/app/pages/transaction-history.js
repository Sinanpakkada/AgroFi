// /pages/transaction-history.js

import Head from 'next/head';
import styles from '../styles/TransactionHistory.module.css'; // Import CSS module
import { useState } from 'react';

const TransactionHistory = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [transactionType, setTransactionType] = useState('Investment');

    const transactions = [
        { date: '2024-09-01', type: 'Investment in Paddy Pool 1', amount: 5000, status: 'Completed', notes: '' },
        { date: '2024-09-15', type: 'Profit Distribution', amount: 750, status: 'Completed', notes: 'From Paddy Pool 2' },
        { date: '2024-10-01', type: 'Investment in Paddy Pool 2', amount: 5000, status: 'Completed', notes: '' },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Transaction History</title>
                <meta name="description" content="View your transaction history" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1>Welcome back, [Investor Name]!</h1>
                <a href="/account-settings" className={styles.accountSettings}>Account Settings</a>
            </header>

            <main className={styles.main}>
                <section className={styles.filterOptions}>
                    <h2>Filter Options</h2>
                    <label>
                        Date Range: 
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        to
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </label>
                    <label>
                        Transaction Type:
                        <select
                            value={transactionType}
                            onChange={(e) => setTransactionType(e.target.value)}
                        >
                            <option value="Investment">Investment</option>
                            <option value="Profit Distribution">Profit Distribution</option>
                        </select>
                    </label>
                </section>

                <section className={styles.transactionList}>
                    <h2>Transaction List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Transaction Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.type}</td>
                                    <td>${transaction.amount.toLocaleString()}</td>
                                    <td>{transaction.status}</td>
                                    <td>{transaction.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default TransactionHistory;
