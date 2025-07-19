import { describe, it, expect } from 'vitest';

import { calculateDiscount } from './calculateDiscount';

describe('calculateDiscount', () => {
  it('throws an error if price is negative', () => {
    expect(() => calculateDiscount(-100)).toThrowError(
      'Price cannot be negative',
    );
  });

  it('applies 20% discount for prices above 1000', () => {
    const PRICE = 2000;
    const DISCOUNT = 400;

    expect(calculateDiscount(PRICE)).toBe(DISCOUNT);
  });

  it('applies 10% discount for prices less that 1000', () => {
    const PRICE = 500;
    const DISCOUNT = 50;

    expect(calculateDiscount(PRICE)).toBe(DISCOUNT);
  });
});
