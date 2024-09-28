// /pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css'; // Import CSS module

const Home = () => {
    const handleInvestNow = () => {
        alert('Redirecting to the investment page...');
        // Redirect to the investment page
        // You can use Router from 'next/router' for actual navigation
        // For example: Router.push('/investment');
    };

    const handleLearnMore = () => {
        alert('Redirecting to learn more page...');
        // Redirect to the about page
        // For example: Router.push('/about');
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Crossfi - Landing Page</title>
                <meta name="description" content="Invest in Sustainable Agriculture!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div className={styles.logo}>Crossfi</div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Login/Register</a></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <section className={styles.overview}>
                    <h1>Invest in Sustainable Agriculture!</h1>
                    <p>Join us in supporting local farmers by investing in paddy crops, ensuring food security and profitable returns.</p>
                </section>

                <section className={styles.callToAction}>
                    <button onClick={handleInvestNow}>Invest Now</button>
                    <button onClick={handleLearnMore}>Learn More</button>
                </section>

                <section className={styles.testimonials}>
                    <h2>Testimonials</h2>
                    <blockquote>
                        “Investing in paddy through Crossfi helped me diversify my portfolio while supporting local agriculture.” — Jane D., Investor
                    </blockquote>
                </section>
            </main>

            <footer className={styles.footer}>
                <ul>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Home;
