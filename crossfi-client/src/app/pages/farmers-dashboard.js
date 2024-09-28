// /pages/farmers-dashboard.js

import Head from 'next/head';
import styles from '../styles/FarmersDashboard.module.css'; // Import CSS module

const FarmersDashboard = () => {
    const farmerName = "Farmer Name"; // Replace with actual farmer's name
    const resourceSuppliers = ["Supplier A", "Supplier B"]; // Add more suppliers as needed

    return (
        <div className={styles.container}>
            <Head>
                <title>Farmer Dashboard - Crossfi</title>
                <meta name="description" content="Farmer Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1>Welcome back, {farmerName}!</h1>
                <a href="#" className={styles.accountLink}>Account Settings</a>
            </header>

            <main className={styles.main}>
                <section className={styles.farmOverview}>
                    <h2>Farm Overview</h2>
                    <p>Resources Available: <strong>Seeds: 200 kg, Fertilizer: 500 kg</strong></p>
                    <p>Current Crops: <strong>Paddy (1 acre)</strong></p>
                </section>

                <section className={styles.investmentRequest}>
                    <h2>Investment Request Form</h2>
                    <form>
                        <label>
                            Amount Needed:
                            <input type="number" value="$3,000" readOnly />
                        </label>
                        <label>
                            Purpose:
                            <input type="text" placeholder="e.g., seeds, equipment" />
                        </label>
                        <label>
                            Resource Supplier:
                            <select>
                                {resourceSuppliers.map(supplier => (
                                    <option key={supplier} value={supplier}>{supplier}</option>
                                ))}
                            </select>
                        </label>
                        <button type="submit" className={styles.submitButton}>Submit Request</button>
                    </form>
                </section>

                <section className={styles.currentCropStatus}>
                    <h2>Current Crop Status</h2>
                    <table className={styles.cropTable}>
                        <thead>
                            <tr>
                                <th>Crop Name</th>
                                <th>Growth Stage</th>
                                <th>Expected Harvest Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Paddy</td>
                                <td>Vegetative</td>
                                <td>December 15, 2024</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className={styles.profitSharingStatus}>
                    <h2>Profit Sharing Status</h2>
                    <p>Expected Profit: <strong>$1,500</strong> from Paddy Pool 2 upon harvest.</p>
                </section>
            </main>
        </div>
    );
};

export default FarmersDashboard;
