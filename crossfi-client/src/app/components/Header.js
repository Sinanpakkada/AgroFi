// src/components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Crossfi</div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/investor-dashboard">Investor Dashboard</Link>
                <Link href="/farmer-dashboard">Farmer Dashboard</Link>
                <Link href="/login">Login/Register</Link>
            </nav>
        </header>
    );
};

export default Header;
