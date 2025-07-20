import { describe, it, expect } from 'vitest';
import { Character } from './character.js';

const firstName = 'John';
const lastName = 'Doe';
const role = 'Computer Scientist';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const character = new Character(firstName, lastName, role);

    expect(character).toEqual(
      expect.objectContaining({
        firstName,
        lastName,
        role,
      }),
    );

    // 1
    // expect(character.firstName).toBe(firstName);
    // expect(character.lastName).toBe(lastName);
    // expect(character.role).toBe(role);

    // 2
    // expect(character).toEqual({
    //   id: expect.any(String),
    //   firstName,
    //   lastName,
    //   role,
    //   level: 1,
    //   strength: expect.any(Number),
    //   wisdom: expect.any(Number),
    //   intelligence: expect.any(Number),
    //   dexterity: expect.any(Number),
    //   charisma: expect.any(Number),
    //   constitution: expect.any(Number),
    //   lastModified: expect.any(Date),
    //   createdAt: expect.any(Date),
    // });
  });

  it('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);

    expect(character.level).toBe(1);

    character.levelUp();

    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character(firstName, lastName, role);
    const initialLastModified = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(initialLastModified);
  });
});
