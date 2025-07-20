import { describe, it, expect } from 'vitest';
import { Person } from './person.js';

vi.mock('uuid', () => ({
  v4: () => 'id',
}));

// Remove the `todo` from the `describe` to run the tests.
describe('Person', () => {
  // This test will fail. Why?
  it('should create a person with a first name and last name', () => {
    const person = new Person('Grace', 'Hopper');

    expect(person).toEqual({
      id: 'id',
      firstName: 'Grace',
      lastName: 'Hopper',
    });
  });
});
