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

  it('parses string into numbers', () => {
    expect(add('1', '1')).toBe(2);
  });

  it('throws an error if a first argument cannon be converted to a number', () => {
    expect(() => add('str', 1)).toThrow('not a number');
  });

  it('throws an error if a second argument cannon be converted to a number', () => {
    expect(() => add(1, 'str')).toThrow('not a number');
  });
});

describe('subtract', () => {
  it('subtracts one number from the other', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  it('accept an array and substract all of the numbers', () => {
    expect(subtract([10, 5], 2)).toBe(3);
  });

  it('default undefined values to 0', () => {
    expect(subtract(3)).toEqual(3);
    expect(subtract(undefined, 3)).toBe(-3);
  });
});

describe('multiply', () => {
  it('multiplies positive numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});

describe('divide', () => {
  it('devides two number', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
