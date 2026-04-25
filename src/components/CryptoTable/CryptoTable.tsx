'use client';

import { useState } from 'react';
import { useCrypto } from '@/hooks/useCrypto';
import { CryptoCard } from '@/components/CryptoCard/CryptoCard';
import { CryptoTableHeader } from './CryptoTableHeader';
import styles from './CryptoTable.module.css';

export const CryptoTable = () => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const { coins, loading, error } = useCrypto();

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc'); //reset to asc
    }
  }

  const sortedCoins = [...(coins ?? [])].sort((a, b) => {
    if (!sortKey) return 0;

    let aVal: number | string;
    let bVal: number | string;

    switch (sortKey) {
      case 'name':
        aVal = a.name.toLowerCase();
        bVal = b.name.toLowerCase();
        break;
      case 'price':
        aVal = a.current_price;
        bVal = b.current_price;
        break;
      case 'change':
        aVal = a.price_change_percentage_24h;
        bVal = b.price_change_percentage_24h;
        break;
      case 'marketCap':
        aVal = a.market_cap;
        bVal = b.market_cap;
        break;
      default:
        return 0;
    }

    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;

    return 0;
  })

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error Loading Data</div>;
  }

  return (
    <div className={styles.cryptoTable}>
      <CryptoTableHeader sortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
      {sortedCoins?.map((crypto) => (
        <CryptoCard key={crypto.id} coin={crypto} />
      ))}
    </div>
  )
}
