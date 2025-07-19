export function parseAge(age) {
  if (typeof age !== 'number') {
    throw new Error('Invalid age format');
  }
  if (age < 0 || age > 120) {
    throw new Error('Age must be between 0 and 120');
  }
  return age;
}
