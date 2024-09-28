// /pages/dashboard.js

import Head from 'next/head';
import styles from '../styles/Dashboard.module.css'; // Import CSS module

const Dashboard = () => {
    const investorName = "Investor Name"; // Replace with actual investor's name

    return (
        <div className={styles.container}>
            <Head>
                <title>Investor Dashboard - Crossfi</title>
                <meta name="description" content="Investor Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1>Welcome back, {investorName}!</h1>
                <a href="#" className={styles.accountLink}>Account Settings</a>
            </header>

            <main className={styles.main}>
                <section className={styles.investmentOverview}>
                    <h2>Investment Overview</h2>
                    <p>Total Investments: <strong>$10,000</strong></p>
                    <p>Current Pools: <strong>2</strong></p>
                    <p>Pending Profits: <strong>$1,200</strong></p>
                </section>

                <section className={styles.currentPools}>
                    <h2>Current Investment Pools</h2>
                    <table className={styles.poolTable}>
                        <thead>
                            <tr>
                                <th>Pool Name</th>
                                <th>Investment Amount</th>
                                <th>Status</th>
                                <th>Estimated Returns</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Paddy Pool 1</td>
                                <td>$5,000</td>
                                <td>Open</td>
                                <td>15% (estimated $750)</td>
                            </tr>
                            <tr>
                                <td>Paddy Pool 2</td>
                                <td>$5,000</td>
                                <td>Closed</td>
                                <td>15% (expected $750)</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={styles.investButton}>View New Paddy Pools</button>
                </section>

                <section className={styles.profitDistribution}>
                    <h2>Profit Distribution</h2>
                    <p>Next Distribution: <strong>November 1, 2024</strong></p>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
