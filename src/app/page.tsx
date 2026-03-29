import { CryptoTable } from '@/components/CryptoTable/CryptoTable';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Crypto Dashboard</h1>
      <span className={styles.lastUpdated}>Data is updated every 12 hours</span>
      <CryptoTable />
    </main>
  )
}