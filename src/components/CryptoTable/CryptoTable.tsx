'use client';

import { useCrypto } from '@/hooks/useCrypto';
import { CryptoCard } from '@/components/CryptoCard/CryptoCard';
import { CryptoTableHeader } from './CryptoTableHeader';
import styles from './CryptoTable.module.css';

export const CryptoTable = () => {
  const { coins, loading, error } = useCrypto();

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error Loading Data</div>;
  }

  return (
    <div className={styles.cryptoTable}>
      <CryptoTableHeader />
      {coins?.map((crypto) => (
        <CryptoCard key={crypto.id} coin={crypto} />
      ))}
    </div>
  )
}
