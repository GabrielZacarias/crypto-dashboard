'use client';

import styles from './CryptoTableHeader.module.css';

export const CryptoTableHeader = () => {
  return (
    <div className={styles.header}>
      <span className={styles.col}>Name</span>
      <span className={styles.col}>Price</span>
      <span className={styles.col}>24h Change</span>
      <span className={styles.col}>Market Cap</span>
      <span className={styles.col}>Volume</span>
    </div>
  )
}
