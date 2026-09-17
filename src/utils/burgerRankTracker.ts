import { MenuItem } from '../types';

// All burger clicks are zeroed (0) to start counting fresh from today
export const INITIAL_BURGER_CLICKS: Record<string, number> = {
  'burg-1': 0,
  'burg-2': 0,
  'burg-3': 0,
  'burg-4': 0,
  'burg-5': 0,
  'burg-6': 0,
  'burg-7': 0,
  'burg-8': 0,
  'burg-9': 0,
  'burg-10': 0,
  'burg-11': 0,
  'burg-12': 0,
  'burg-13': 0,
  'burg-14': 0,
  'burg-15': 0,
  'burg-16': 0,
  'burg-17': 0,
  'burg-18': 0,
  'burg-19': 0,
  'burg-20': 0,
  'burg-21': 0,
  'burg-22': 0,
};

const STORAGE_KEY = 'touros_burger_order_clicks_v2_zeroed';

export function getBurgerClicks(): Record<string, number> {
  if (typeof window === 'undefined') return { ...INITIAL_BURGER_CLICKS };
  try {
    // Clear legacy keys from previous sessions to guarantee all counts start at 0 today
    localStorage.removeItem('touros_burger_order_clicks');

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BURGER_CLICKS));
      return { ...INITIAL_BURGER_CLICKS };
    }
    const parsed = JSON.parse(stored);
    return { ...INITIAL_BURGER_CLICKS, ...parsed };
  } catch {
    return { ...INITIAL_BURGER_CLICKS };
  }
}

export function registerBurgerOrderClick(burgerId: string): Record<string, number> {
  const current = getBurgerClicks();
  const updated = {
    ...current,
    [burgerId]: (current[burgerId] || 0) + 1,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // localStorage might be unavailable
  }
  return updated;
}

export function resetBurgerClicks(): Record<string, number> {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BURGER_CLICKS));
  } catch {
    // fallback
  }
  return { ...INITIAL_BURGER_CLICKS };
}

export interface BurgerRankingInfo {
  top1Id: string;
  top2Id: string;
  top1Count: number;
  top2Count: number;
  isTop1: boolean;
  isTop2: boolean;
  rank: number | null;
  count: number;
}

export function getTopTwoBurgers(
  burgers: MenuItem[],
  clicks: Record<string, number>
): { top1Id: string; top2Id: string; top1Count: number; top2Count: number } {
  // Sort burgers by clicks descending. When tied (e.g. all 0), use initial house reference
  const tieBreakers = ['burg-21', 'burg-4', 'burg-20', 'burg-8', 'burg-22', 'burg-5'];

  const sorted = [...burgers].sort((a, b) => {
    const countA = clicks[a.id] ?? 0;
    const countB = clicks[b.id] ?? 0;
    if (countB !== countA) {
      return countB - countA;
    }
    const indexA = tieBreakers.indexOf(a.id);
    const indexB = tieBreakers.indexOf(b.id);
    const orderA = indexA === -1 ? 999 : indexA;
    const orderB = indexB === -1 ? 999 : indexB;
    return orderA - orderB;
  });

  const top1 = sorted[0];
  const top2 = sorted[1];

  return {
    top1Id: top1 ? top1.id : 'burg-21',
    top2Id: top2 ? top2.id : 'burg-4',
    top1Count: top1 ? (clicks[top1.id] ?? 0) : 0,
    top2Count: top2 ? (clicks[top2.id] ?? 0) : 0,
  };
}
