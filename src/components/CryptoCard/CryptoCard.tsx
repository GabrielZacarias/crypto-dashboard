'use client';

import Image from 'next/image';
import { Coin } from '@/types/crypto';
import styles from './CryptoCard.module.css';

interface CryptoCardProps {
  coin: Coin;
}

/**
 * Formats a number as a price string in USD.
 * @param price The price to format.
 * @returns The formatted price string in USD.
 */
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

/**
 * Formats a number as a market capitalization string in USD.
 * @param marketCap The market capitalization to format.
 * @returns The formatted market capitalization string in USD.
 */
const formatMarketCap = (marketCap: number): string => {
  const TRILLION = 1_000_000_000_000;
  const BILLION = 1_000_000_000;
  const MILLION = 1_000_000;
  const THOUSAND = 1_000;

  switch (true) {
    case marketCap >= TRILLION:
      return `$${(marketCap / TRILLION).toFixed(2)}T`;
    case marketCap >= BILLION:
      return `$${(marketCap / BILLION).toFixed(2)}B`;
    case marketCap >= MILLION:
      return `$${(marketCap / MILLION).toFixed(2)}M`;
    case marketCap >= THOUSAND:
      return `$${(marketCap / THOUSAND).toFixed(2)}K`;
    default:
      return `$${marketCap.toString()}`;
  }
}

export const CryptoCard = ({ coin }: CryptoCardProps) => {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className={styles.card}>
      
      <div className={styles.coinInfo}>
        <Image src={coin.image} alt={coin.name} width={40} height={40} />
        <div>
          <h2 className={styles.name}>{coin.name}</h2>
          <span className={styles.symbol}>{coin.symbol}</span>
        </div>
      </div>

      <div className={styles.priceInfo}>
        <p className={styles.price}>{formatPrice(coin.current_price)}</p>
      </div>

      <div className={styles.changeInfo}>
        <p className={`${styles.badge} ${isPositive ? styles.positiveBadge : styles.negativeBadge}`}>
          {isPositive ? '▲' : '▼'} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
        </p>
      </div>

      <div className={styles.marketInfo}>
        <p className={styles.value}>{formatMarketCap(coin.market_cap)}</p>
      </div>

      <div className={styles.volumeInfo}>
        <p className={styles.volume}>{coin.total_volume}</p>
      </div>
    </div>
  )
}
