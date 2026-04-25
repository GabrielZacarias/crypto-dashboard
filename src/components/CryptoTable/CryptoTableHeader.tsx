'use client';

import styles from './CryptoTableHeader.module.css';

interface CryptoTableHeaderProps {
  sortKey: string | null;
  sortDirection: 'asc' | 'desc';
  onSort: (key: string) => void;
}

export const CryptoTableHeader = ({ sortKey, sortDirection, onSort }: CryptoTableHeaderProps) => {
  const getArrow = (key: string) => {
    if (sortKey !== key) return '';
    return sortDirection === 'asc' ? '↑' : '↓';
  }

  return (
    <div className={styles.header}>
      <span className={styles.col} onClick={() => onSort('name')}>Name {getArrow('name')}</span>
      <span className={styles.col} onClick={() => onSort('price')}>Price {getArrow('price')}</span>
      <span className={styles.col} onClick={() => onSort('change')}>24h Change {getArrow('change')}</span>
      <span className={styles.col} onClick={() => onSort('marketCap')}>Market Cap {getArrow('marketCap')}</span>
      <span className={styles.col} onClick={() => onSort('volume')}>Volume {getArrow('volume')}</span>
    </div>
  )
}
