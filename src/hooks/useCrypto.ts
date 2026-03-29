'use client'

import { useState, useEffect } from 'react';
import { Coin } from '@/types/crypto';

const CURRENCY = 'usd';
const PER_PAGE = 10;
const PAGE = 1;
const ORDER = 'market_cap_desc';
const REVALIDATE_INTERVAL = 43200; // 12 hours

const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${CURRENCY}&order=${ORDER}&per_page=${PER_PAGE}&page=${PAGE}&sparkline=false`;

export const useCrypto = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          next: {
            revalidate: REVALIDATE_INTERVAL
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch crypto data');
        }

        const data: Coin[] = await response.json();
        setCoins(data);
      } catch (err) {
        console.log('Something went wrong: ', err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { loading, error, coins };
}