import { describe, it, expect } from 'vitest';
import { parseAge } from './parseAge';

describe('parseAge', () => {
  it('throwns an error for non-number input', () => {
    expect(() => parseAge('50')).toThrow('Invalid age format');
  });

  it('throwns an error for out-of-range age', () => {
    expect(() => parseAge(-10)).toThrow('Age must be between 0 and 120');
    expect(() => parseAge(200)).toThrow('Age must be between 0 and 120');
  });

  it('returns a valid age for a number between 0 and 120', () => {
    expect(parseAge(23)).toBe(23);
  });
});
