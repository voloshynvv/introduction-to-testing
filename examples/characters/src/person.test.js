import { describe, it, expect } from 'vitest';
import { Person } from './person.js';

vi.mock('uuid', () => ({
  v4: () => 'id',
}));

const firstName = 'Grace';
const lastName = 'Hopper';

describe('Person', () => {
  it('should create a person with a first name and last name', () => {
    const person = new Person(firstName, lastName);

    expect(person).toEqual({
      id: 'id',
      firstName,
      lastName,
    });
  });

  it('throws an error if firstName or lastName is missing', () => {
    expect(() => new Person(firstName)).toThrowError(
      'First name and last name are required',
    );

    expect(() => new Person()).toThrow('First name and last name are required');
  });

  it('returns fullname', () => {
    const person = new Person(firstName, lastName);

    expect(person.fullName).toBe(`${firstName} ${lastName}`);
  });
});
