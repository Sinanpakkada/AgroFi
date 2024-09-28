// /pages/profit-distribution.js

import Head from 'next/head';
import styles from '../styles/ProfitDistribution.module.css'; // Import CSS module

const ProfitDistribution = () => {
    const upcomingDistributions = [
        { date: 'November 1, 2024', amount: 750, source: 'Paddy Pool 2' },
    ];

    const pastDistributions = [
        { date: 'August 1, 2024', amount: 750, pool: 'Paddy Pool 1', status: 'Completed' },
        { date: 'September 1, 2024', amount: 750, pool: 'Paddy Pool 2', status: 'Completed' },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Profit Distribution</title>
                <meta name="description" content="View your profit distributions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1>Welcome back, [Investor Name]!</h1>
                <a href="/account-settings" className={styles.accountSettings}>Account Settings</a>
            </header>

            <main className={styles.main}>
                <section className={styles.upcomingDistributions}>
                    <h2>Upcoming Distributions</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upcomingDistributions.map((distribution, index) => (
                                <tr key={index}>
                                    <td>{distribution.date}</td>
                                    <td>${distribution.amount}</td>
                                    <td>{distribution.source}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className={styles.pastDistributions}>
                    <h2>Past Distributions</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount Received</th>
                                <th>Pool Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pastDistributions.map((distribution, index) => (
                                <tr key={index}>
                                    <td>{distribution.date}</td>
                                    <td>${distribution.amount}</td>
                                    <td>{distribution.pool}</td>
                                    <td>{distribution.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default ProfitDistribution;
