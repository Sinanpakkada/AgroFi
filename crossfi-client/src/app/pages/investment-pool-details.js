// /pages/investment-pool-details.js

import Head from 'next/head';
import styles from '../styles/InvestmentPoolDetails.module.css'; // Import CSS module

const InvestmentPoolDetails = () => {
    const poolName = "Paddy Pool 1";
    const targetAmount = 20000;
    const currentAmountRaised = 10000;
    const investmentDeadline = "October 15, 2024";
    const trustedSuppliers = [
        { name: "Supplier A", type: "Fertilizer" },
        { name: "Supplier B", type: "Seeds" },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>{poolName} - Investment Pool Details</title>
                <meta name="description" content={`Details for ${poolName}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1>{poolName}</h1>
            </header>

            <main className={styles.main}>
                <section className={styles.poolInformation}>
                    <h2>Pool Information</h2>
                    <p><strong>Target Amount:</strong> ${targetAmount.toLocaleString()}</p>
                    <p><strong>Current Amount Raised:</strong> ${currentAmountRaised.toLocaleString()}</p>
                    <p><strong>Investment Deadline:</strong> {investmentDeadline}</p>
                </section>

                <section className={styles.investmentForm}>
                    <h2>Investment Form</h2>
                    <form>
                        <label>
                            Amount to Invest:
                            <input type="number" defaultValue={1000} />
                        </label>
                        <button type="submit" className={styles.confirmButton}>Confirm Investment</button>
                    </form>
                </section>

                <section className={styles.riskAndReturns}>
                    <h2>Risk and Returns</h2>
                    <p>Investors can expect a return of <strong>15%</strong> on their investment, but agricultural risks apply, including weather and crop diseases.</p>
                </section>

                <section className={styles.supplierInformation}>
                    <h2>Supplier Information</h2>
                    <ul>
                        {trustedSuppliers.map(supplier => (
                            <li key={supplier.name}>
                                {supplier.name} ({supplier.type})
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default InvestmentPoolDetails;
