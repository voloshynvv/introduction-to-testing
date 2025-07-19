import { describe, it, expect } from 'vitest';
import { add, multiply, subtract, divide } from './arithmetic';

describe('add', () => {
  it('adds positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('adds two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });

  it('adds positive and negative numbers', () => {
    expect(add(1, -2)).toBe(-1);
  });
});

describe('subtract', () => {
  it('subtracts one number from the other', () => {
    expect(subtract(4, 2)).toBe(2);
  });
});

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });

  it('multiplies by 0', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('multiplies negative numbers', () => {
    expect(multiply(-3, -2)).toBe(6);
  });

  it('multiplies a positive and a negative number', () => {
    expect(multiply(3, -2)).toBe(-6);
  });
});

describe('divide', () => {
  it('devides two number', () => {
    expect(divide(10, 2)).toBe(5);
  });
});
