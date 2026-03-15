import { CryptoDashboard } from '@/widgets/CryptoDashboard/CryptoDashboard';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Crypto<span>Tracker</span>
        </h1>
        <p className={styles.subtitle}>
          Live cryptocurrency prices updated every 10 seconds
        </p>
      </header>
      <CryptoDashboard />
    </section>
  );
};
